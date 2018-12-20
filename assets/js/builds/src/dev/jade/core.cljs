(ns jade.core
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.router :refer [->router]]
            [jade.views.homescreen :refer [->homescreen] :as hs]
            [jade.views.termsconditions :refer [->termsconditions]]
            [jade.views.order-details :refer [->order-details]]
            [jade.views.select-dispensary :refer [->select-dispensary]]
            [clojure.set :as set]
            [clojure.string :as str]
            [goog.json :as gjson]
            [jade.views.add-a :as add-a]
            [jade.views.review :refer [->review]]
            [jade.views.details :refer [->details]]
            [jade.views.complete :refer [->complete]]
            [jade.views.scanid :refer [->scanid ->scanmid] :as si]
            [jade.views.browse :refer [->browse] :as b]
            [goog.dom :as gdom]
            [goog.debug :as debug]
            [goog.net.XhrIo :as xhr]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(enable-console-print!)

(def view-sequence [:homescreen :scanid :scanmid
                    :select-dispensary :termsconditions
                    :browse :credit-card :address :review :complete])

(def view->
  "hand a given view and return the next"
  (zipmap view-sequence (->> view-sequence
                             cycle
                             (drop 1))))
(def <-view
  "hand a given view and return the previous"
  (set/map-invert view->))

(def views {:homescreen ->homescreen
            :select-dispensary ->select-dispensary
            :termsconditions ->termsconditions
            :order-details ->order-details
            :credit-card add-a/->credit-card
            :address add-a/->address
            :review ->review
            :details ->details
            :scanid ->scanid
            :scanmid ->scanmid
            :browse ->browse
            :complete ->complete})

(def core-opts {:elephant {:logo-path "elephant/slices/"}
                :lotus {:logo-path nil}})

(defcomponentk root [data owner]
  (render [_]
          (->router data {:opts {:start :homescreen
                                 :type :lotus
                                 :core-opts core-opts
                                 :page-views views}})))
(defn start-app [copy]
  (let [transactions (chan)
        state (atom {:products [["Sour Diesel" "3.5g" "$50"]
                                ["OG Kush" "3.5g" "$50"]
                                ["Hakuna Matata" "3.5g" "$50"]]})
        transactions-pub (pub transactions :tag)]
    (om/root root
             state
             {:target (gdom/getElement "app")
              :tx-listen (fn [tx]
                           (put! transactions tx))
              :shared {:nav-tokens (chan)
                       :view-> view->
                       :<-view <-view
                       :strands copy
                       :transroute (chan)
                       :transactions-pub transactions-pub}})))

(defn strand-sort [strand strands  strand-types]
  (let [strand-type (strand-types (:type strand))]
    (if strand-type
      (update-in strands [(keyword strand-type)] conj strand)
      strands)))

(defn ^:export init
  "grabs values from a google drive spreadsheet and pulls it into shared app-state"
  []
  (xhr/send "https://spreadsheets.google.com/feeds/list/1HoGBhv9cgwcXKLFPExbezgJR8BGcaw9Gs5UrlhEiFRQ/od6/public/values?alt=json"
            (fn [e] (let [copy-json (.-entry (.-feed (.getResponseJson (.-target e))))
                          copy-edn (js->clj copy-json :keywordize true)
                          parsed-edn* (mapv #(select-keys % ["title" "gsx$details" "gsx$type" "gsx$amount" "gsx$price"]) copy-edn)
                          parsed-edn (reduce (comp (fn [strands strand*]
                                                     (let [[{title  "$t"}  {copy "$t"} {type "$t"} {amount "$t"} {price "$t"}]  (vals strand*)
                                                           strand (hash-map :title title :copy copy :type type :amount amount :price price)
                                                           strands (update-in strands [:All] conj strand)]
                                                       (strand-sort strand strands #{"Sativa" "Indica" "Hybrid" "JadeMeNow"})))) {} parsed-edn*)]
                      (start-app parsed-edn)))))

