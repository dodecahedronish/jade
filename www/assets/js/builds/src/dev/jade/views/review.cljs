(ns jade.views.review
  (:require-macros [cljs.core.async.macros :as async :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.header :refer [->header]]
            [jade.components.dheader :refer [->dheader]]
            [jade.components.review :refer [->review-section ->orders-section] :as r]
            [jade.components.dispensary :refer [->dispensary]]
            [jade.components.footer :refer [->footer]]
            [jade.components.input :refer [->input]]
            [cljs.core.async :as async :refer [<! >! put! chan close! timeout alts!]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [jade.config :as conf]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk review* [data owner opts state]
  (render [_]
          (let [p-opts (hash-map :opts opts :state @state)]
              (dom/section {:class "full flex column"
                            :style {:overflow-y "scroll"}}
                           
                           (->header {:left-icon "chevron-left"
                                      :height 10
                                      :left-behavior (utils/c-lambda-panel opts owner state :prev)
                                      :prompt "REVIEW YOUR ORDER"})
                           (dom/section {:class ""
                                         :style {:width "100%"
                                                 :position "absolute"
                                                 :left 0
                                                 :top "9%"
                                                 :height "77%"
                                                 :overflow-y "scroll"}} 
                                        (map #(->review-section %) r/revs)  
                                        (->orders-section r/order-data))
                           (->footer {:copy (->dheader {:height 30
                                                        :no-listener true
                                                        :copy "PLACE ORDER"} p-opts)
                                      :c-height 15
                                      :height 50} p-opts)))))


(defcomponentk review [data owner opts state]
  (render [_]
          (let [coord (chan)
                layout (conf/add-main-transition @state {:tween ["ease"]
                                                         :coord coord
                                                         :z-index 0
                                                         :width 100
                                                         :height 100
                                                         :coord-process utils/coord-process
                                                         :child {:component review*
                                                                 :child-opts {:coord coord}}})] 
            (->panel data {:init-state layout
                           :opts opts}))))
