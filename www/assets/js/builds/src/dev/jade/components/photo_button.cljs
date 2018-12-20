(ns jade.components.photo-button
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk photo-button [data owner opts state]
  (render [_]
          (let [[clicked unclicked] (:click-states opts)
                panel! (utils/c-lambda-panel opts owner state)]
            (dom/div {:class "flex"
                      :style {:width "85px"
                              :height "85px"
                              :border-radius "50%"
                              :border "1px solid gray"}}
                     (dom/div {:class "flex"
                               :on-click (fn [e]
                                           (swap! state assoc :clicked true)
                                           (panel! e))
                               :on-touch-start (comp panel! (fn [e]
                                                              (swap! state assoc :clicked true)
                                                              e))
                               :style {:width "75px"
                                       :height "75px"
                                       :-webkit-transition (str "all " (:duration state) "s " (:tween state))
                                       :transition (str "all " (/ (:duration @state) 2) "s " (rand-nth (:tween @state))) 
                                       :border-radius "50%"
                                       :background (if (:clicked @state) clicked unclicked)}}
                              (dom/img {:src "img/camera.png"
                                        :style {:height "45%"
                                                :-webkit-filter "invert()"}}))))))
