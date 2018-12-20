(ns jade.mixins.gohub
  (:require [om-tools.mixin :refer-macros [defmixin]]
            [cljs.core.async :as async :refer [chan put! pipe unique merge map< filter< alts! <!]]
            [om.core :as om :include-macros true]
            [jade.utils :refer [hand-state]]
            [goog.debug :as debug]))

(defn create-chan [owner state]
  (if-not (:coord state)
    (assoc state :coord (chan))
    state))

(defn mnt-process [owner state]
  (when-let [coord-process (:coord-process state)]
    (let [coord (:coord state)] 
      (coord-process coord owner (:trans-out state) state))))

(defmixin go-hub
  (will-mount [owner]
              (hand-state mnt-process owner)))
