(ns jade.components.panel
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [jade.mixins.gohub :refer [go-hub]]
            [jade.utils :refer [transform-str direct-trans]]
            [jade.mixins.transin :refer [trans-in]]
            [goog.dom :as gdom]
            [goog.debug :as debug]
            [cljs.core.async :as async :refer [chan put! pipe unique map< filter< alts! <!]]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponentk]]
            [om-tools.dom :as dom :include-macros true]))

(enable-console-print!)

(defcomponentk panel [data owner state opts]
  (:mixins go-hub trans-in)
  (display-name [_] "panel")
  (render-state [_ state]
                (let [transstr (transform-str (:trans state)
                                              (if (:no-transition-in state)
                                                (:trans-in state)
                                                (direct-trans (:trans-init state) (:dir data))))]
                  (dom/section {:class "flex preserve-3d"

                                :style {:background (str "#" (:color state))
                                        :-webkit-transition (str "all " (:duration state) "s " (:tween state))
                                        :transition (str "all " (:duration state) "s " (rand-nth (:tween state)))
                                        :position (when (:absolute state)   "absolute")
                                        :transform transstr
                                        :opacity (or (:opacity state) 1)

                                        :backface-visibility "hidden"
                                        :-webkit-transform transstr
                                        :zIndex (or (or (:z-index state)  (:z-index opts)) 0)
                                        :width (str (or (:width state)  (:width opts)) "%")
                                        :height "100%"}}
                               (om/build (-> state :child :component)
                                         ((or (:cursor (:child state)) identity) data)
                                         {:opts (merge opts (:child-opts (:child state)))
                                          :state state})))))
