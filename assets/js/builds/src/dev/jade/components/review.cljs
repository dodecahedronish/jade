(ns jade.components.review
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.image-view :refer [->product-view]]
            [jade.components.header :refer [->header]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(defn order-c [height]
  (let [data [["Sour Diesel"
                [ "3.5g"
                  "x2"
                  "/"
                  "$100"]]
               ["OG Kush"
                [ "3.5g"
                  ""
                  "/"
                  "$50"]]
               ["Total"
                [ ""
                  ""
                  ""
                  "$150"]]]
        order-maker (partial zipmap [:left :order])
                     ]
    (->> data
         (mapv order-maker)
         (mapv #(assoc %
                  :c-height height
                  :border "1px solid rgb( 195, 214, 206 )")))))

(def revs (let [reviewer (partial zipmap [:header :left :right :src])] 
            (->>  (mapv reviewer [ ["ADDRESS"
                                   "241 Taaffe Pl. Apt. 704"
                                   ""
                                   "img/chevron-right.png"]
                                  ["PAYMENT METHOD"
                                   "Mastercard"
                                   "... 1234"
                                   "img/chevron-right.png"]
                                  ["DELIVERY"
                                   "ASAP"
                                   "ABOUT 20 MIN"
                                   "img/chevron-right.png"]])
                  (map #(assoc % :header-bg "review-header"
                               :h-height 36
                               :c-height 75)))))

(def order-data 
  {:header "YOUR ORDER"
   :h-height 36
   :header-bg "review-order"
   :orders (order-c 75)})

(defcomponentk r-header [data owner opts state]
  (render [_]
          (dom/div {:class (str (:header-bg data) " flex gothic gsize review-neutral regular")
                    :style {:width "100%"
                            :height (str (:h-height data) "px")}}
                   (dom/span {:class "flex-start"
                              :style {:width "90%"
                                      :height "100%"}}
                             (:header data)))))

(defcomponentk r-content [data owner opts state]
  (render [_] 
          (dom/div {:class "flex-between bert size large"
                    :style {:width "90%"
                            :border-bottom (:border data)
                            :height (str (:c-height data) "px")}}
                   (dom/span (:left data))
                   (if-let [[weight amt spacer total] (:order data)]
                     (dom/div {}
                              (dom/span {:class "margin-right2"} weight)
                              (dom/span {:class "margin-right gothic"} amt)
                              (dom/span {:class "margin-right"} spacer)
                              (dom/span {:class "margin-right gothic"} total))
                       (dom/div {}
                                (dom/span (:right data))
                                (dom/img {:style {:margin-left ".5rem"
                                                  :height "20%"
                                                  :opacity 0.3}
                                          :src (:src data)}))))))

(defcomponentk orders-section [data owner opts state]
  (render [_]
          (dom/section {:class "flex column large"
                        :style {:width "100%"}}
                       (->r-header data)
                       (map #(->r-content %) (:orders data)))))

(defcomponentk review-section [data owner opts state]
  (render [_]
          (dom/section {:class "flex column large"
                        :style {:width "100%"
                                }}
                       (->r-header data)
                       (->r-content data))))
