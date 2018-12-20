(ns jade.views.complete
  (:require-macros [cljs.core.async.macros :as async :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.header :refer [->header]]
            [jade.components.dheader :refer [->dheader]]
            [jade.components.review :refer [->r-content ->orders-section] :as r]
            [jade.components.dispensary :refer [->dispensary]]
            [jade.components.footer :refer [->footer]]
            [jade.components.input :refer [->input]]
            [cljs.core.async :as async :refer [<! >! put! chan close! timeout alts!]]
            [goog.dom :as gdom]
            [jade.utils :as utils :refer [%str]]
            [jade.config :as conf]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk copy [data owner opts state]
  (render [_]
          (dom/section {:class "flex column bert"
                        :style {:width "100%"
                                :font-size "1.6rem"
                                :height (%str (:height data))}}
                       "Your order should arrive  "  
                       (dom/div {:class "flex bert"}
                                "around"
                                (dom/span {:style {:margin-left "5px"
                                                                    :color "#009372"}
                                                            :class "large gothic"} "10:30pm")))))

(defcomponentk complete* [data owner opts state]
  (render [_]
          (dom/section {:class "full flex column"}
                       (->header {:left-icon "chevron-left"
                                  :left-behavior (utils/c-lambda-panel opts owner state)
                                  :height 10
                                  :prompt "ORDER SUCCESSFUL"})
                       (->copy {:height 12})
                       (dom/div {:class "flex gothic regular"
                                 :style {:width "90%"
                                         :border-bottom "1px solid rgb( 195, 214, 206 )"
                                         :height "8%"}}
                                (dom/span "YOUR ORDER"))
                       (map #(->r-content %) (r/order-c 63.5))
                       (dom/div {:class "flex column gothic large"
                                 :style {:width "90%"
                                         :margin-top "5.5%"
                                         :height "15%"}}
                                (dom/span "Geoffrey Thorpe")
                                (dom/span {:class "bert"}  "241 Taaffe Pl. Apt. 704")
                                (dom/span {:class "bert"} "Mastercard ... 1234")))))


(defcomponentk complete [data owner opts state]
  (render [_]
          (let [coord (chan)
                layout (conf/add-main-transition @state {:tween ["ease"]
                                                         :coord coord
                                                         :z-index 0
                                                         :width 100
                                                         :height 100
                                                         :coord-process utils/coord-process
                                                         :child {:component complete*
                                                                 :child-opts {:coord coord}}})] 
            (->panel data {:opts opts
                           :init-state layout}))))
