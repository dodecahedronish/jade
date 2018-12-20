(ns jade.components.dheader
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.image-view :refer [->product-view]]
            [jade.components.header :refer [->header]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))


(defcomponentk dheader [data owner opts state]
  (render [_]
          (let [dactivate-order-details! #(put! (:coord @state) :toggle-order-details)] 
              (dom/div {:class "dark flex gothic"
                        :on-touch-end (when-not (:no-listener data)   dactivate-order-details!)
                        ;;:on-click (when-not (:no-listener data)  dactivate-order-details!) 
                        :style {:position "relative"
                                :background (if (:clicked @state)
                                              "gray"
                                              "rgb( 36, 42, 43 )")
                                :-webkit-transition (str "all " (:duration state) "s " (:tween state))
                                :transition (str "all " (/ (:duration @state) 2) "s " (rand-nth (:tween @state))) 
                                :font-size (or (:size data)  "1.85rem")
                                :height (str (:height data) "%")
                                :width "100%"}}
                       (dom/img {:class "margin-right2"
                                 
                                 ;;:on-click dactivate-order-details!
                                 :style {:transform (str "scale(" (:scale data) ")")}
                                 :src (:left-icon data)})
                       (dom/span {:class "margin-right2 goth large" :style {:color "white"}} (:copy data))
                       utils/spacer
                       (dom/span {:class "goth large"
                                  :style {:color "#009372"}}  "$150")))))

