(ns jade.views.details
  (:require-macros [cljs.core.async.macros :as async :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.header :refer [->header]]
            [jade.components.dispensary :refer [->dispensary]]
            [cljs.core.async :as async :refer [<! >! put! chan close! timeout alts!]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [om-tools.core :refer-macros [defcomponentk]]))

(defn coord-process [coord owner trans-out state]
  (go-loop []
    (when-let [sig (<! coord)]
      (case sig
        :clicked (om/set-state! owner :clicked true)
        :toggle (om/set-state! owner :trans trans-out)
        :+cart (om/set-state! owner :+cart true)
        (println "no case, brah"))
      (recur))))



(def spacer (dom/span {:class "neutral-color margin-right2 bert large"} "/"))

(defcomponentk footer [data owner opts state]
  (render [_]
          (let [panel! (utils/c-lambda-panel opts owner state)] 
            (dom/section {:class "flex gothic"
                          :style {:width "100%"
                                  :position "relative"
                                  :font-size "1.45rem"
                                  :color "white"
                                  :background-color "white"
                                  :height "12%" }}
                         (dom/div {:class "flex-between"
                                   :style {:position "absolute"
                                           :border-top "1px solid rgb( 195, 214, 206 )"
                                           :-webkit-box-shadow "0 -6px 11px -6px rgba(0,0,0,.25)"
                                           :top ".5%"
                                           :left "5%"
                                           :height "100%"
                                           :width "90%"}}
                                  (dom/div {:class "flex"
                                            :style {:background "rgb( 36, 42, 43 )"
                                                    :width "30%"
                                                    :height "80%"}}
                                           (dom/span {
                                                      :class "margin-right"}
                                            (if (:+cart @state) "2" "1"))
                                           ;; up-down glyph
                                           (dom/img {:style {:transform (str "scale(" ".65" ")")}
                                                     :src "img/updown.png"})
                                           )
                                  (dom/div {:class "flex"
                                            :style {:background (if (:clicked  @state)
                                                                  (:trans-bg @state)
                                                                  "rgb( 36, 42, 43 )")
                                                    :width "65%"
                                                    :-webkit-transition (str "all " (:duration @state) "s " (:tween state))
                              :transition (str "all " (/ (:duration @state) 2) "s " (rand-nth (:tween @state))) 
                                                    :height "80%"}}
                                           (dom/span {:class "margin-right"
                                                      :style {}
                                                      :on-click (fn [e]
                                                                  
                                                                  (if (:+cart @state)
                                                                    (put! (:coord @state) :details-off)
                                                                    (put! (:coord @state) :+cart)))}
                                                     (if (:+cart @state)
                                                       "UPDATE"
                                                       "ADD TO ORDER "))
                                           spacer
                                           (dom/span {:style {:color "rgb( 0, 147, 114 )"}}
                                                     (if (:+cart @state) "$100" "$50 "))))))))



(defn diesel [{:keys [title type]}]   (dom/div {:class "flex column bert details"
                              :style {:width "100%"
                                      :margin-bottom "5%"
                                      :height "100%"}}
                           (dom/div {:class "gothic margin-right2"
                                     :style {:font-size "2.85rem"}} (.toUpperCase (or title "w/e")))
                           (dom/div {:class "flex regular"
                                     :style {:width "100%"}}
                                    (dom/span {:class "margin-right2 base-color"} type)
                                    spacer
                                    (dom/span {:style {:font-size "1.6rem"}
                                               :class "margin-right2 base-color"} "THC ")
                                    (dom/span {:class "margin-right2 gothic"} "75%")
                                    spacer
                                    (dom/span {:style {:font-size "1.6rem"}
                                               :class "margin-right base-color"} "CBD ")
                                    (dom/span {:class "margin-right gothic"} "25%")
                                    )))

(defn price-time [{:keys [amount price]}] (dom/div {:class "flex column bert"
                                :style {:width "100%"
                                        :margin-bottom "5%"
                                        :height "100%"}}
                             (dom/div {:class "flex base-color"
                                       :style {:width "100%"}}
                                      (dom/span {:class "margin-right bert-line base-color regular"} amount)
                                      spacer
                                      (dom/span {:class "margin-right gothic large"} price)
                                      spacer
                                      (dom/img {:class "margin-right"
                                                :src "img/alarm.png"})
                                      (dom/span {:class "margin-right bert-line base-color regular"} "20min")
                                      )))

(defn copy [details]
  (dom/div {:class "flex column"
            :style {:width "100%"
                    :margin-bottom "5%"
                    :height "100%"}}
           (dom/article {:style {:width "80%"
                                 :font-family "Helvetica"
                                 :font-size "14px"
                                 :text-align "center"}}
                        (or details "consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam"))))

(defcomponentk detail [data owner opts state]
  (render [_] 
          (dom/section {:class "flex"
                        :style {:width "100%"
                                :position "relative"
                                :margin-top (or (:margin opts)  "5%")
                                :background-color "white"
                                :height (str (:height opts) "%") }}
                       (dom/div {:class "flex-between"
                                 :style {:position "absolute"
                                         :border-bottom (when-not (:no-border opts)
                                                          "1px solid rgb( 195, 214, 206 )")
                                         ;;:-webkit-box-shadow "0 -6px 11px -6px rgba(0,0,0,.25)"
                                         :top ".5%"
                                         :left "5%"
                                         :height "100%"
                                         :width "90%"}}
                                (let [component (:component opts)]
                                  component)))))

(defcomponentk details* [data owner opts state]
  (render [_]
          (let [details-off #(put! (:coord @state) :details-off)
                remove-cart #(put! (:coord @state) :-cart)]
            (dom/section {:class "full flex column"
                          :style {:background "white"}}
                         (dom/div {:class "flex"
                                   :on-click details-off
                                   :on-touch-start details-off
                                   :style {:position "absolute"
                                           :top "16px"
                                           :left "20px"
                                           :width "45px"
                                           :height "45px"
                                           :background "rgb( 0, 147, 114 )"
                                           :border-radius "50%"}}
                                  (dom/img {:style {:-webkit-filter "invert()"
                                                    :margin-right ".015rem"
                                                    }
                                            :src "img/remove.png"}))
                         (dom/div {:class "flex"
                                   :on-click remove-cart
                                   :on-touch-start remove-cart
                                   :style {:position "absolute"
                                           :top "16px"
                                           :right "20px"
                                           :opacity (if (:+cart @state) 1 0)
                                           :-webkit-transition (str "all " 0.5"s " "ease-in")
                                           :width "45px"
                                           :height "45px"
                                           :background "#f04055"
                                           :border-radius "50%"}}
                                  (dom/img {:style {:-webkit-filter "invert()"}
                                            :src "img/bin.png"}))
                         (dom/div  {:style {:background "url('img/weedasset.png')"
                                            :background-size "cover"
                                            :background-position "center center"
                                            :margin-bottom ".75rem"
                                            :height "50%"
                                            :width "100%"
                                       
                                            }})
                         (dom/section {:class "flex column"
                                       :style {:height "60%"
                                               :width "100%"}}
                                      (->detail data {:opts {:height 20
                                                             :margin 0
                                                             :component (diesel data)}})
                                      (->detail data {:opts {:height 10
                                                             :component (price-time data)}})
                                      (->detail data {:opts {:height 40
                                                             :no-border true
                                                             :component (copy (:copy data))}}))
                         (->footer data {:opts opts
                                         :state @state})))))


(defcomponentk details [data owner opts state]
  (render [_]
          (let [coord (:coord @state)
                layout {:tween ["ease"]
                        :duration .9
                        :trans-init {:y 0}
                        :trans-in {:y 0 :z 0 :x 0}
                        :trans-out {:y 0 :scale 0.8}
                        :trans-bg "gray"
                        :z-index 1
                        :width 100
                        :height 90
                        
                        :coord coord
                        :child {:component details*
                                :child-opts {:coord coord}}}] 
            (let  [p-opts (hash-map :opts opts :state {:+cart (:+cart @state)
                                                       :trans (:trans-detail @state)} :init-state layout)]
              
              (->panel data p-opts))))
  )
