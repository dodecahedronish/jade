(ns jade.views.add-a
  (:require-macros [cljs.core.async.macros :as async :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.config :as conf]
            [jade.components.panel :refer  [->panel]]
            [jade.components.header :refer [->header]]
            [jade.components.dheader :refer [->dheader]]
            [jade.components.dispensary :refer [->dispensary]]
            [jade.components.footer :refer [->footer]]
            [jade.components.input :refer [->input]]
            [cljs.core.async :as async :refer [<! >! put! chan close! timeout alts!]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk credit-card* [data owner opts state]
  (render [_]
          (let [p-opts {:opts opts
                        :state @state}] 
            (dom/section {:class "full flex column"}
                         (->header  {:left-icon "chevron-left"
                                     :height 10
                                     :left-behavior (utils/c-lambda-panel opts owner state :prev)
                                     :prompt "ADD A CREDIT CARD"})
                         (dom/section {:class "flex column"
                                       :style {:width "100%"
                                               :height "80%"}}
                                      (->input {:height 10
                                                :width 100
                                                :cwidth 90
                                                :default "Card#"})
                                      (dom/div {:class "flex"
                                                :style {:width "90%"
                                                        :height "auto"}}
                                               (->input {:height 10
                                                         :width 50
                                                         :hor-stack true
                                                         :cwidth 100
                                                         :default "mm/yy"}) 
                                               (->input  {:height 10
                                                          :width 50
                                                          :cwidth 100
                                                          :hor-stack true
                                                          :default "CVV"})))
                         (->footer {:copy "DONE"
                                    :c-height 15
                                    :height 50} p-opts)))))

(defcomponentk address* [data owner opts state]
  (render [_]
          (let [p-opts {:opts opts
                        :state @state}] 
            (dom/section {:class "full flex column"}
                         (->header {:left-icon "chevron-left"
                                    :left-behavior (utils/c-lambda-panel opts owner state :prev)
                                    :height 10
                                    :prompt"ADD AN ADDRESS"})
                         (dom/section {:class "flex column"
                                       :style {:width "100%"
                                               :height "80%"}}
                                      (->input  {:height 10
                                                 :width 100
                                                 :cwidth 90
                                                 :default "Street Address"})
                                      (dom/div {:class "flex"
                                                :style {:width "90%"
                                                        :height "auto"}}
                                               (->input  {:height 10
                                                          :width 50
                                                          :hor-stack true
                                                          :cwidth 100
                                                          :default "Apt/Suite #"}) 
                                              (->input {:height 10
                                                         :width 50
                                                         :cwidth 100
                                                         :hor-stack true
                                                         :default "ZIP"})))
                         (->footer {:copy "DONE"
                                    :c-height 15
                                    :height 50} p-opts)))))


(defcomponentk credit-card [data owner opts state]
  (render [_]
          (let [coord (chan)
                layout (conf/add-main-transition @state {:coord coord
                                                  :tween ["ease"]
                                                  :z-index 0
                                                  :width 100
                                                  :height 100
                                                  :child {:component credit-card*
                                                          :child-opts {:coord coord}}
                                                  :coord-process utils/coord-process})] 
            (->panel data {:init-state layout
                           :opts opts}))))


(defcomponentk address [data owner opts state]
  (render [_]
          (let [coord (chan)
                layout (conf/add-main-transition @state {:tween ["ease"]
                                                  :coord coord
                                                  :z-index 0
                                                  :width 100
                                                  :height 100
                                                  :coord-process utils/coord-process
                                                  :child {:component address*
                                                          :child-opts {:coord coord}}})] 
            (->panel data {:init-state layout
                           :opts opts}))))
