(ns jade.components.footer
  (:require-macros [cljs.core.async.macros :as async :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.dheader :refer [->dheader]]
            [jade.components.dispensary :refer [->dispensary]]
            [cljs.core.async :as async :refer [<! >! put! chan close! timeout alts!]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk footer [data owner opts state]
  (render [_]
          (let [panel! (utils/c-lambda-panel opts owner state)]  
            (dom/section {:style {:position "absolute"
                                  :bottom 0
                                  :left 0
                                  :width "100%"
                                  :height (str (:c-height data) "%")}}  
                         (dom/div {:class "flex"
                                   :style {:width "100%"
                                           :position "relative"
                                           :color "white"
                                           :background-color "white"
                                           :height "100%" }}
                                  (dom/div {:class "flex column"
                                            :on-click panel!
                                            :on-touch-start panel!
                                            :style {:position "absolute"
                                                    :border-top "1px solid rgb( 195, 214, 206 )"
                                                    :-webkit-box-shadow "0 -6px 11px -6px rgba(0,0,0,.25)"
                                                    :top ".5%"
                                                    :left "5%"
                                                    :height "100%"
                                                    :width "90%"}}
                                           (dom/div {:class "flex gothic large"
                                                     :style {:background (if (:clicked @state)
                                                                           (or (:delta-color data) "gray")
                                                                           "rgb( 36, 42, 43 )")
                                                             :font-size (or (:fsize data)  "24px")
                                                             :-webkit-transition (str "all " (:duration state) "s " (:tween state))
                                                             :transition (str "all " (/ (:duration @state) 2) "s " (rand-nth (:tween @state))) 
                                                             :color "white"
                                                             :width "100%"
                                                             :height (:height data)}}
                                                    (:copy data))
                                           (:node data)))))))
