(ns jade.components.header
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk header [data owner opts state]
  (render [_]
          (let [spacer ".35rem"
                class-str "flex glyphicons base-color"]
            (dom/div {:class "dark flex gothic"
                      :style {:width "100%"
                              :position "absolute"
                              :opacity (:opacity data)
                              :background (:bg data)
                              :font-size (or (:size data)  "1.85rem")
                              :top 0
                              :color "white"
                              :left 0
                              :zIndex 1
                              :height (str (or (:h-height data) "8.75") "%")}}
                     (dom/div {:class "flex-between"
                               :style {:width "98%"}}
                      (dom/span {:on-click (:left-behavior data)
                                 ;;:on-touch-start (:left-behavior data)
                                 :class (str class-str " " (:left-icon data))
                                 
                                 :style {:height "50%"
                                         :padding-left (:padding data)
                                         :margin-left spacer
                                         :zIndex 1
                                         }})
                      (dom/div {:class "flex"
                                :style {:position "absolute"
                                        :width "100%"
                                        :height "100%"
                                        :top 0
                                        :left 0}}
                               (if-let [prompt (:prompt data)]  
                                 (dom/span {:class "goth large"}  prompt)
                                 (dom/img {:style {:height "60%"
                                                   :width "auto"}
                                           :src (str "lotus/slices/"  "logo_titlebar.png")})))
                      (dom/span {:style {
                                         :zIndex 1
                                         :height "50%"}
                                 :on-click (:right-behavior data)
                                 :on-touch-start (:right-behavior data)
                                 :class (str class-str " " (:right-icon data))}))))))
