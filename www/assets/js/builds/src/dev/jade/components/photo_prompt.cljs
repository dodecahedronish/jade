(ns jade.components.photo-prompt
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [jade.components.photo-button :refer [->photo-button]]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk photo-prompt [data owner opts state]
  (render [_]
          (let [[l ll] (:prompt opts)]
            (dom/div {:class "flex column bert large"
                      :style {:position "absolute"
                              :bottom 0 
                              :left 0
                              :height "34%"
                              :width "100%"}}
                     (dom/section {:class "flex"
                                   :style {:width "100%"
                                           :position "relative"
                                           :margin-bottom "1.15rem"
                                           :font-size "24px"
                                           :margin-top "1.5%"
                                           :background-color "white"
                                           :height "30%"}}
                                  (dom/div {:class "flex column"
                                            :style {;;:position (when-not (:hor-stack data)   "absolute")
                                                    :border-bottom "1px solid rgb( 195, 214, 206 )"
                                                    ;;:-webkit-box-shadow "0 -6px 11px -6px rgba(0,0,0,.25)"
                                                    :margin-top "1.75rem"
                                                    ;;:left "5%"
                                                    :margin-bottom "1rem"
                                                    :height "100%"
                                                    :width "90%"}}
                                           
                                           (dom/span l)
                                           (dom/span {:style {:margin-bottom "1rem"}} ll)))
                     
                     (->photo-button data {:opts opts
                                           :state @state})))))
