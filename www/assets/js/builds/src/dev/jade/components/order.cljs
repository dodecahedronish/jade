(ns jade.components.order
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.image-view :refer [->product-view]]
            [jade.components.header :refer [->header]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk order [data owner opts state]
  (render [_]
          (let [n-panel! (utils/c-lambda-panel opts owner state)
                activate-order-details! #(put! (:coord @state) :order-details)]
            (dom/div {:class "dark flex order"
                      :on-click activate-order-details!
                      :on-touch-start activate-order-details!
                      :style {:height (str (:height data) "%")
                              :background (when (:clicked @state) (:trans-bg @state))
                              :-webkit-transition (str "all " (:duration @state) "s " (:tween state))
                              :transition (str "all " (/ (:duration @state) 2) "s " (rand-nth (:tween @state))) 
                              :position "absolute"
                              :bottom 0
                              :left 0
                              :width "100%"}} 
                     (dom/img)
                     (dom/span {:class "margin-right gothic" :style {:color "white"}} (:copy data))
                     utils/spacer
                     (dom/span {:class "base-color gothic"} "$150")))))
