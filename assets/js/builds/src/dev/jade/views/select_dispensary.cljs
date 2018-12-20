(ns jade.views.select-dispensary
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.header :refer [->header]]
            [jade.components.dispensary :refer [->dispensary]]
            [jade.components.footer :refer [->footer]]
            [jade.config :as conf]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk select-dispensary* [data owner opts state]
  (render [_]
          (let [p-opts {:opts opts
                        :state @state}]
            (dom/div {:class "full flex column"}
                     (->header {:prompt "SELECT YOUR PRIMARY CARE VENDORS"
                                :size "1.71428571rem"
                                :left-behavior (utils/c-lambda-panel opts owner state :prev)
                                
                                :left-icon "chevron-left"
                                :right-icon "search" ;; eye-glasses
                                } p-opts)
                     (dom/div {:style {:position "absolute"
                                       :width "100%"
                                       :height "81.5%"
                                       :overflow-y "scroll"
                                       :top "7.5%"}} 
                              (map (fn [data]
                                     (->dispensary data)) (repeat 5 ["Exhale Medical Center"
                                                                     " 980 N La Cinega Blvd #102 West Hollywyood, CA 90069"])))
                     (->footer {:copy "CONFIRM"
                                :c-height 14.78
                                :height 45} p-opts)))))

(defcomponentk select-dispensary [data owner opts state]
  (render [_]
          (let [coord (chan)
                layout (conf/add-main-transition @state {:tween ["ease"]
                                                         :z-index 0
                                                         :width 100
                                                         :height 100
                                                         :coord coord
                                                         :child {:component select-dispensary*
                                                                 :child-opts {:coord coord}}
                                                         :coord-process utils/coord-process})] 
            (->panel data {:opts opts
                           :init-state layout}))))
