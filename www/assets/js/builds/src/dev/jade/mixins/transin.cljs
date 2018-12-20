(ns jade.mixins.transin
  (:require [om-tools.mixin :refer-macros [defmixin]]
            [cljs.core.async :as async :refer [chan put! pipe unique merge map< filter< alts! <!]]
            [om.core :as om :include-macros true]
            [jade.utils :refer [hand-state]]
            [goog.debug :as debug]))

(enable-console-print!)

(defn transin [owner state]
  (when-not (:no-transition-in state)
    (js/setTimeout
     (fn []
       (om/set-state! owner :trans (:trans-in state))) 8)))

(defmixin trans-in
  (did-mount [owner]
             (hand-state transin owner)))
