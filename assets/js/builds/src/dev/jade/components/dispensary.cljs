(ns jade.components.dispensary
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.header :refer [->header]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk dispensary [data owner opts state]
  (display-name [_] "dispensary")
  (render [_]
          (let [[place address] data
                select! #(swap! state update-in [:selected] not)]
            (dom/div {:class "flex column"
                      ;;:on-touch-start select!
                      :on-click select!
                      :style {:width "100%"
                              :height "95.5px"
                              :position "relative"
                              :-webkit-transition (str "all " ".5s ease" )
                              :transition (str "all " ".5s ease" )
                              :background (when (:selected @state) "#edf3f0")
                              }}
                     (dom/div {:class "flex"
                               :style {:position "absolute"
                                       :height "100%"
                                       :width "auto"
                                       :right 0}}
                              (dom/i {:class (when (:selected @state) "glyphicons ok")
                                      :style {:margin-right ".5rem"
                                              :color "#009372"}}))
                     (dom/section {:class "flex"
                                   :style {:position "relative"
                                           :height "100%"
                                           :width "100%"}}
                                  (dom/div {:class ""
                                            :style {:width "90%"}}             
                                           (dom/div {:class "gothic large"
                                                     :style {:margin-bottom ".25rem"}} place)
                                           (dom/div {:class "bert"
                                                     :style {:font-size "15px"}} address)))
                       
                     (dom/span {:style {:width "90%"
                                        :border-bottom "1px solid rgb( 195, 214, 206 )"}})))))
