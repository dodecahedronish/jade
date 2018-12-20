(ns jade.views.order-details
  (:require-macros [cljs.core.async.macros :as async :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.config :as conf]
            [jade.components.panel :refer  [->panel]]
            [jade.components.dheader :refer [->dheader]]
            [jade.components.order :refer [->order]]
            [jade.components.footer :refer [->footer]]
            [jade.components.dispensary :refer [->dispensary]]
            [cljs.core.async :as async :refer [<! >! put! chan close! timeout alts!]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk detail [data owner opts state]
  (render [_] 
          (dom/section {:class "flex"
                        :style {:width "100%"
                                :position "relative"
                                :margin-top "1.5%"
                                :background-color "white"
                                :height (str (:height opts) "%") }}
                       (dom/div {:class "flex-between"
                                 :style {:position "absolute"
                                         :border-bottom (when-not (:no-border opts)
                                                          "1px solid rgb( 195, 214, 206 )")
                                         ;;:-webkit-box-shadow "0 -6px 11px -6px rgba(0,0,0,.25)"
                                         :top ".5%"
                                         :left "5%"
                                         :height "100%"
                                         :width "90%"}}
                                (let [component (:component opts)]
                                  component)
                                (when (:arrow opts) 
                                  (dom/img {:height "30%"
                                            :width "auto"
                                            :src "img/chevron-right.png"
                                            :style {:margin-bottom ".15rem"
                                                    :position "relative"
                                                    :right 0
                                                    :opacity 0.3}}))))))

(def sour (dom/div {:class "full margin-bottom flex-between bert size regular"}
                   (dom/span {:class "large"} "Sour Diesel")
        
                   (dom/div {:class "flex-end"
                             :style {:width "36%" :height "auto"
                                     :position "relative"
                                     :right 0}}
                            (dom/span {:class "margin-right2 base-color"} "3.5g")
                            (dom/span {:class "margin-right2 gothic"} "x2")
                            utils/spacer
                            (dom/span {:class "gothic margin-right2"} "$100")
                            )))

(def kush (dom/div {:class "full margin-bottom flex-between bert size regular"}
                   (dom/span {:class "large"} "OG Kush")
                   (dom/div {:class "flex-end"
                             :style {:width "28%" :height "auto"}}
                            (dom/span {:class "margin-right2 base-color"} "3.5g")
                            utils/spacer
                            (dom/span {:class "gothic margin-right2"} "$50"))))

(def total (dom/div {:class "full margin-bottom flex-between bert size regular"}
                    (dom/span {:class "large"} "Total")
                    (dom/div {:style {:width "auto" :height "auto"}}
                             (dom/span {:class "gothic"} "$150"))))

(defcomponentk details [data owner opts state]
  (render [_] (dom/section {:style {:width "100%"
                                    :height "90%"}}
                           (->detail data {:opts {:component sour
                                                  :arrow true
                                                  :height 10}})
                           (->detail data {:opts {:component kush
                                                  :arrow true
                                                  :height 10}})
                           (->detail data {:opts {:component total
                                                  :height 10}}))))


(defcomponentk order-details* [data owner opts state]
  (render [_]
          (let [p-opts {:opts opts
                        :state @state}]
            (dom/section {:class "full flex column"
                          :style {:background "white"}}
                         (->dheader {:left-icon "img/updown.png"
                                     :scale .65
                                     :height 10
                                     :copy "YOUR ORDER"} p-opts)
                         (->details data)
                         (->footer {:copy "CHECKOUT"
                                    :c-height 12
                                    :height 50} p-opts)))))


(defcomponentk order-details [data owner opts state]
  (render [_]
          (let [coord (chan)
                layout {:tween ["ease"]
                        :z-index 1
                        :width 100
                        :duration .9
                        :trans-init {:y 0}
                        :trans-in {:y 0 :z 0 :x 0}
                        :trans-out {:y 0 :scale 0.8}
                        :height 100
                        ;; :coord coord
                        ;;:coord-process utils/coord-process
                        :child {:component order-details*
                                ;;:child-opts {:coord coord}
                                }}
                p-opts (if (:from-router @state)   
                         (hash-map :init-state (merge (assoc @state :duration .6) {:child {
                                                                         :component order-details*}}))  
                         (hash-map :opts opts :state {:+cart (:+cart @state)
                                                      :clicked (:clicked @state)
                                                      :coord (:coord @state)
                                                      :trans (:trans-order-details @state)} :init-state layout))] 
            (->panel data p-opts))))
