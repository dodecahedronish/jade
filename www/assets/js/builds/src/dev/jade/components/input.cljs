(ns jade.components.input
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.image-view :refer [->product-view]]
            [jade.components.header :refer [->header]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk input [data owner opts state]
  (render [_]
          (dom/section {:class "flex bert input-space large"
                        :style {:width (str (:width data) "%")
                                :position "relative"
                                :margin-top "1.5%"
                                :background-color "white"
                                :height (str (:height data) "%") }}
                       (dom/div {:class "flex"
                                 :style {:position (when-not (:hor-stack data)   "absolute")
                                         :border-top "1px solid rgb( 195, 214, 206 )"
                                         ;;:-webkit-box-shadow "0 -6px 11px -6px rgba(0,0,0,.25)"
                                         :top ".5%"
                                         :left "5%"
                                         :height "100%"
                                         :width (str (:cwidth data) "%")}}
                                (dom/input {:class "flex bert"
                                            :style {:border "none"
                                                    :margin-top "8px"
                                                    :outline-width "0"
                                                    :font-size "24px"
                                                    :text-align "center"}
                                            :placeholder (:default data)})))))
