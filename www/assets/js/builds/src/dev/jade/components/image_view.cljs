(ns jade.components.image-view
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.header :refer [->header]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk product-view [data owner opts state]
  (display-name [_] "product-view")
  (render [_]
          (let [ {:keys [title amount price]} data
                 filename (-> title
                              (clojure.string/replace " " "")
                              (.toLowerCase)
                              (str ".png"))
                 activate-details! #(put! (:coord @state) [:details-on data])]
            (dom/div {:class "flex column"
                      :style {
                              ;;:-webkit-box-shadow "0  8px 10px -8px #696868"
                              ;;:margin-bottom "350px"
                              ;;:border-image "url('img/shadow_top.png')"
                              ;;:border-bottom "15px solid transparent"
                              ;;:background-size "cover"
                              ;;:background-position "center center"
                              :width "95%"
                              :left "2.5%"
                              :position "relative"
                              :min-height "50%"
                              }}
                     (dom/span {:style {:height "2.5%"
                                        :background-image (when-not (= (:idx data) 0) "url('img/shadow_top.png')")
                                        :background-size "cover"
                                        :background-position "center center"
                                        :width "100%"}} "")
                     (dom/div  {:on-click activate-details!
                                :style {:background-image "url('img/weedasset.png')"
                                        :background-size "cover"
                                        :background-position "center center"
                                       
                                        :height "50%"
                                        :width "100%"
                                       
                                        }})   
                     (dom/div {:class "flex column"
                               
                               :style {:border-bottom "1px solid #c3d6ce"
                                       :width "100%"
                                       :height "14%"
                                       :background "white"
                                       }}
                              (dom/div {:class "flex"
                                        ;;:on-touch-start activate-details!
                                        :on-click activate-details!
                                        :style {:width "100%"
                                                :height "auto"}}
                                       (dom/span {:class "margin-right2 gothic large"}  (str (.toUpperCase title) " "))
                                       utils/spacer
                                       (dom/span {:style {:color "#009372"
                                                          :margin-top ".35rem"}
                                                  :class "margin-right bert regular"} (str " " amount " "))
                                       (dom/span {:class "margin-right gothic large"} (str " " price " ")))
                              (dom/span {:class ""} ""))))))

(defcomponentk image-view [data owner opts state]
  (display-name [_] "image-view")
  (render [_]
          (dom/div {:style {:width "100%"
                            :height "100%"}}
                   (->header (assoc data
                               :left-behavior (utils/c-lambda-panel opts owner state :prev)
                               :h-height 8.5) {:opts opts})
                   (dom/div  {:on-click activate-details!
                              :style {:background-image (str "url(" (:img data) ")") 
                                      :background-size "cover"
                                      :background-position "center center"
                                       
                                      :height "66%"
                                      :width "100%%"
                                       
                                      }}))))
