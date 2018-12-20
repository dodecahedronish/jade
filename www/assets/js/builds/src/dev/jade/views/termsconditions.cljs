(ns jade.views.termsconditions
   (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.image-view :refer [->product-view]]
            [jade.components.header :refer [->header]]
            [jade.components.footer :refer [->footer]]
            [jade.config :as conf]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(defcomponentk local-dispensary [data owner opts state]
  (render [_]
          (let [[place address] data]
            (dom/div {:class "flex-start"}
                     (dom/section {:class "flex"
                                   :style {}}
                                  (dom/div {:style {:width "100%"}}             
                                           (dom/div {:class "gothic"
                                                     :style {:font-size "33.33px"}} place)
                                           (dom/div {:class "base-color bert"
                                                     :style {:font-size "15px"}} address)))))))

(defcomponentk termsconditions* [data owner opts state]
  (render [_]
          (let [p-opts (hash-map :opts opts :state @state)]
            (dom/div {:class "flex column terms"
                      :style {:height "100%"
                              :width "100%"}}
                     (->header {:prompt "TERMS & CONDITIONS"
                                :left-behavior (utils/c-lambda-panel opts owner state :prev)
                                :left-icon "chevron-left" ;; left caret
                                } {:opts opts})
                     (dom/div {:style {:margin-top "8%"
                                       :position "absolute"
                                       :top "4%"
                                       :left "6%"
                                       :overflow-y "scroll"
                                       :height "76%"
                                       :width "88%"}} 
                              (dom/div {:class "gothic"
                                        :style {:font-size "1.6rem"}} "DESIGNATION OF PRIMARY CAREGIVER")
                              (dom/div {:class "base-color bert"
                                        :style {:font-size "1.5rem"}} "(California Health & Safety Code 11362.5)")
                              (dom/p "I hereby certify that I suffer from cancer, anorexia, AIDS, chronic pain, spasticity, glaucoma, arthritis, migraine, or other serious illness and I have obtained a recommendation or approval from a licensed physician to use medical marijuana (cannabis) in treating my illness. (A copy of my recommendation or approval is attached hereto).")

                              (dom/p "I hereby designate"
                                     (map (fn [data]
                                            (->local-dispensary data {:opts {:class "flex-start"}})) (repeat 2 ["Exhale Medical Center"
                                                                                                          " 980 N La Cinega Blvd #102 West Hollywyood, CA 90069"
                                                                                                          ])))
                              (dom/p "as my “Primary Caregiver,” in accordance with Health & Safety Code 11362.5(d) and 11362.5(e), which read as follows:")
                              ;; separate each letter to dom node
                              (dom/p "(d) Section 11357, relating to the possession of marijuana, and Section 11358, relating to the cultivation of marijuana, shall not apply to a patient, or to a patients primary caregiver, who possesses or cultivates marijuana for the personal medical purposes of the patient upon the written or oral recommendation or approval of a physician.")
                              (dom/p "(e) For the purpose of this section, “primary caregiver” means the individual/collective designated by the person exempted under this act who has consistently assumed responsibility for the housing, health, or safety of that person.
I agree that I will consistently rely on the above-named person as the primary source of my medical marijuana as a matter of my personal health and safety. This designation shall remain in effect for a period of one year.")
                              (dom/p "NOTICE TO LAW ENFORCEMENT: Pursuant to the Constitution of the State of California, Amendment III, Sec. 3.5(c), state law enforcement officials have “no power ... to refuse to enforce a statute on the basis that federal law or federal regulations prohibit the enforcement of such statute.” It is therefore your legal duty and responsibility to respect and obey this agreement per the above-cited legislation, and to leave the individuals and gardens herein described unmolested and unreported to federal authorities. Failure to follow state law may result in legal action being taken against you. Thank you for your understanding and compliance. "))
                     (->footer {:copy "ACCEPT"
                                :c-height 15
                                :height 45} p-opts)))))

(defcomponentk termsconditions [data owner opts state]
  (render [_]
          (let [coord (chan)
                layout (conf/add-main-transition @state {:tween ["ease"]
                                                         :z-index 0
                                                         :width 100
                                                         :height 100
                                                         :coord coord
                                                         :child {:component termsconditions*
                                                                 :child-opts {:coord coord}}
                                                         :coord-process utils/coord-process})] 
            (->panel data {:opts opts
                           :init-state layout}))))
