(ns jade.views.scanid
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.photo-prompt :refer [->photo-prompt]]
            [jade.components.image-view :refer [->image-view]]
            [goog.dom :as gdom]
            [jade.config :as conf]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk scanid* [data owner opts state]
  (render [_]
          (let [p-opts {:opts opts
                        :init-state @state}]
            (dom/div {:class "full flex column"}
                     (->image-view {:img "img/id.png"
                                    :left-icon "glyphicons chevron-left"
                                    :opacity 1
                                    :prompt "SCAN YOUR ID"} p-opts)
                     (->photo-prompt data {:opts (merge opts
                                                        {:prompt ["Please scan your"
                                                                  "Government Issued ID"]
                                                         :click-states ["gray" "rgb( 36, 42, 43 )"]})
                                           :state @state})))))

(defcomponentk scanmid* [data owner opts state]
  (render [_]
          (let [p-opts {:opts opts
                        :init-state @state}]
            (dom/div {:class "full flex column"}
                     (->image-view {:img "img/mid.png"
                                    :left-icon "glyphicons chevron-left"
                                    :opacity 1
                                    :prompt (.toUpperCase "Scan Your MMJ Card")} p-opts)
                     (->photo-prompt data {:opts (merge opts
                                                        {:prompt ["Please
                                                        scan your"
                                                                   "MMJ
                                                        card for
                                                        verification"]
                                                         :click-states ["gray" "rgb( 36, 42, 43 )"]
                                                         })
                                           :state @state
                                           })))))


(defcomponentk scanid [data owner opts state]
  (render [_]
          (let [coord (chan)
                layout (conf/add-main-transition @state {:tween ["ease"]
                                                         :z-index 0
                                                         :width 100
                                                         :height 100
                                                         :coord coord
                                                         :child {:component scanid*
                                                                 :child-opts {:coord coord}}
                                                         :coord-process utils/coord-process})] 
            (->panel data {:opts opts
                           :init-state layout}))))


(defcomponentk scanmid [data owner opts state]
  (render [_]
          (let [coord (chan)
                layout (conf/add-main-transition @state {:tween ["ease"]
                                                         :z-index 0
                                                         :width 100
                                                         :height 100
                                                         :coord coord
                                                         :child {:component scanmid*
                                                                 :child-opts {:coord coord}}
                                                         :coord-process utils/coord-process})] 
            (->panel data {:opts opts
                           :init-state layout}))))
