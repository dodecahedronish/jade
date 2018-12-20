(ns jade.utils
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async :refer [<! >! put! chan close! timeout alts!]]
            [clojure.string :as string]
            [om-tools.dom :as dom :include-macros true]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponentk]]))

(defn clicked [i-c e]
  (.preventDefault e)
  (put! i-c [:clicked])
  e)

(defn direct-trans [direction-m direction]
  (reduce-kv (fn [m k v] 
               (assoc m k (* direction v))) {} direction-m))

(defn lambda-panel [i-c c route s-t delta-t dir  e]
  (go 
    #_(<! (async/timeout s-t))
    #_(>! i-c [:toggle dir])
    (<! (async/timeout delta-t))
    (>! c [route dir])))

(defn c-lambda-panel [opts owner state & prev?]
  (let [dur (:duration @state)
        t (* dur 1000)
        [prev next] (:routes opts)
        s-t (/ t 1.2)
        coord (:coord opts)
        dir (if prev? -1 1)
        nav-c (om/get-shared owner :nav-tokens)
        panel! (if prev? (partial lambda-panel coord nav-c prev s-t t dir)
                   (comp (partial lambda-panel coord nav-c next s-t t dir)
                         (partial clicked coord)))]
    panel!))

(defn coord-process [coord owner trans-out state]
  (go-loop []
    (when-let [[sig val] (<! coord)]
      (case sig
        :toggle (om/set-state! owner :trans (direct-trans trans-out val))
        :clicked (om/set-state! owner :clicked true)
        (println "no case, brah"))
      (recur))))

(defn %str [val]
  (str val "%"))

(defn transform-str [state {:keys [x y z scale] :or {x 0 y 0 z 0 scale 1}} dir]
  (str "scale(" (or (:scale state) scale) ")"
       "translate3d(" (or (:x state)  x) "%,"
       (or (:y state) y) "%,"
       (or (:z state) z)  "px)" ))

(def spacer (dom/span {:class "neutral-color margin-right2 bert large"
                       :style {:margin-top ".35rem"}} "/"))

(defn hand-state [lambda owner]
  (let [state (om/get-state owner)]
    (lambda owner state)))

(defn move!
  ([dir c e]
     (.preventDefault e)
     (put! c [:<-> dir])))

(defn lift-and-clear [cb owner ref ev]
  (om/set-state! owner :submitting-email false)
  #_(when (= (.-which ev) 13))
  (let [node (om/get-node owner ref)
        val (.-value node)]
    (set! (.-value node) "")
    (cb val owner)))
