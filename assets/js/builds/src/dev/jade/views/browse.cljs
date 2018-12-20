(ns jade.views.browse
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.image-view :refer [->product-view]]
            [jade.components.order :refer [->order]]
            [jade.components.header :refer [->header]]
            [jade.views.details :refer [->details ->details*]]
            [jade.views.order-details :refer [->order-details]]
            [jade.config :as conf]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(defn coord-process [coord owner trans-out state]
  (go-loop []
    (when-let [sig (<! coord)]
      (case sig
       
        
        :toggle-order-details (let [active? (om/get-state owner :order-details)]
                                (if active? 
                                  (do
                                    (om/set-state! owner :order-details nil)
                                    (om/set-state! owner :trans-order-details {:y 91.25}))
                                  (do
                                    (om/set-state! owner :order-details true)
                                    (om/set-state! owner  :trans-order-details {:y 0}))))
        :order-details (go (om/set-state! owner :active-overlay :order-details)
                           (<! (async/timeout 55))
                           (om/set-state! owner :trans-order-details {:y 0}))
        :details-on (go 
                      (om/set-state! owner :active-overlay :details)
                      (<! (async/timeout 55))
                      (om/set-state! owner :trans-detail {:x 0}))
        :details-off (do
                       (om/set-state! owner :trans-detail {:y 140})
                       (<! (async/timeout 500))
                       (om/set-state! owner :+cart false))
        :+cart (do
                 (om/set-state! owner :trans-detail {:x 0 :y 0 :z 0})
                 (om/set-state! owner :+cart true))
        :-cart (om/set-state! owner :+cart false)
        (let [[sig value] sig]
          (case sig
            :toggle (om/set-state! owner :trans trans-out)
            :details-on (go 
                          (om/set-state! owner :active-strain value)
                          (om/set-state! owner :active-overlay :details)
                          (<! (async/timeout 55))
                          (om/set-state! owner :trans-detail {:x 0}))
            :clicked (do (om/set-state! owner :clicked true))  
            (println sig))))
      (recur))))

(defcomponentk browse* [data owner opts state]
  (init-state [_] {:lense :All
                   :active-overlay :details
                   :clicked false
                   :trans-order-details {:y 90}
                   :trans-detail {:y 140}})
  (render [_]
          (let [p-opts (hash-map :opts opts :state @state)
                strands (om/get-shared owner :strands)
                lense (:lense @state)]
            (dom/section {:class "full flex column"
                          :style {:overflow-x "hidden"
                                  :overflow-y "hidden"}}
                         (dom/div {:class "full flex column" 
                                   :style {:position "absolute"
                                           :zIndex (if (:details @state) -1 0)
                                           :overflow-x "hidden"
                                           :overflow-y "hidden"
                                           :top 0
                                           :left 0}}
                                  (->header {:left-icon  "cogwheel"
                                             :bg "white"
                                             :right-icon "search"} {:opts opts})
                                  (dom/div {:class "flex column"
                                            :style {:background "transparent"
                                                    :position "absolute"
                                                    :top "8%"
                                                    :left 0
                                                    :zIndex 1
                                                    :height "7.5%"
                                                    :width "100%"}} 
                                           (dom/div {:class "flex"
                                                     :style {
                                                             :position "relative"
                                                             ;;:-webkit-box-shadow "0  8px 10px -8px #696868"
                                                             :border-bottom "1px solid #c3d6ce"
                                                             ;;:background "transparent"
                                                             :zIndex 1005
                                                             :background "#fff"
                                                             :height "100%"
                                                             :width "95%"}}
                                                    (dom/div {:class "flex-between"
                                                              :style {:width "90%"}} 
                                                             (map (fn [lense]
                                                                    (let [change-lense! (fn [_] (swap! state #(assoc % :lense (keyword lense)))) ]
                                                                      (if (= lense (name (:lense @state)))
                                                                        (dom/span {:class "base-color gothic regular"
                                                                                   :on-touch-start change-lense!
                                                                                   :on-click change-lense!} lense)
                                                                        (dom/span {:class "bert regular"
                                                                                   :on-touch-start change-lense!
                                                                                   :on-click change-lense!
                                                                                   :style {:color "#8b9495"}}  lense))))
                                                                  ["All" "Sativa" "Indica" "Hybrid" "JadeMeNow"]))
                                                    )
                                           (dom/div {:width "100%"
                                                     ;;:src "img/shadow_top.png"
                                                     :class "header_shadow"
                                                     :style {
                                                             :position "relative"
                                                             :bottom 0
                                                             :left 0
                                                             ;;:background "#fff"
                                                            ;; :background-image "url('img/shadow_top.png')"
                                                             ;;:background-size "cover"
                                                             ;; :background "transparent"
                                                             ;;:background-position "center center"
                                                             ;;:width "100%"
                                                             }} ""))
                                  (dom/div {:class "column"
                                            :style {:position "absolute"
                                                    :top "15%"
                                                        
                                                    :overflow-y "scroll"
                                                    :overflow-x "hidden"
                                                    :width "100%"
                                                    :height "77%"
                                                    }}
                                           (map-indexed #(->product-view (assoc %2 :idx %) p-opts) (lense strands)))
                                  (->order-details data p-opts))
                         (if (= :details (:active-overlay @state))  
                           (->details (:active-strain @state) p-opts))
                           
                         ))))


(defcomponentk browse [data owner opts state]
  (render [_]
          (let [coord (chan)
                layout (conf/add-main-transition @state {:tween ["ease"]
                                                         :z-index 0
                                                         :trans-bg "gray"
                                                         :width 100
                                                         :height 100
                                                         :coord coord
                                                         :child {:component browse*
                                                                 :child-opts {:coord coord}}
                                                         :coord-process coord-process})] 
            (->panel data {:opts opts
                           :init-state layout}))))
