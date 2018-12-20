(ns jade.views.homescreen
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.input :refer [->input]]
            [jade.components.footer :refer [->footer]]
            [jade.config :as conf]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

(def opts {:homescreen {:elephant {:logo-path "elephant/slices/"
                                   :dimensions [374 436]
                                   :font nil}
                        :lotus {:logo-path "lotus/slices/"
                                :dimensions [311 406]
                                :font nil}}})

(defcomponentk signup [data owner opts state]
  (render [_]
          (dom/div {:class "flex"
                    :style {:height "10%"
                            :width "100%"}}
           )))

(defcomponentk fields [data owner opts state]
  (render [_]
          (dom/div {:class "flex-start-column"
                    :style {:width "100%"
                            :margin-top "2.25rem"
                            :height "48%"}}
                   (dom/span {:class "gothic flex large"
                              :style {:width "100%"
                                      :margin-bottom ".5rem"}} "SIGN UP")
                   (->input {:height 20
                             :width 100
                             :cwidth 90
                             :default "Enter Your Email"})
                   (->input {:height 20
                             :width 100
                             :cwidth 90
                             :default "Choose A Password"}))))

(defcomponentk homescreen* [data owner opts state]
  (render [_]
          (let [p-opts {:opts opts
                        :state @state}]
            (dom/div {:class "full flex column"}
                     (dom/img {:width "auto"
                               :height "40%"
                               :src (str "lotus/slices/" "logo_homescreen.png")})
                     (->fields data p-opts)
                     (->footer {:copy "CREATE ACCOUNT"
                                :height "51.5px"
                                :c-height 23.15
                                :delta-color "rgb( 195, 214, 206 )"
                                :node (dom/span {:class "bert regular"
                                                 :style {:margin-top "6.15%"
                                                         :color "black"}}
                                                "Already have an account? "
                                                (dom/a {:class "gothic base-color"} "Sign In"))} p-opts)))))

(defcomponentk homescreen [data owner opts state]
  (render [_]
          (let [coord (chan)
                layout (conf/add-main-transition @state {:tween ["ease"]
                                                         :z-index 0
                                                         :width 100
                                                         :height 100
                                                         :coord coord
                                                         :child {:component homescreen*
                                                                 :child-opts {:coord coord}}
                                                         :coord-process utils/coord-process})] 
            (->panel data {:opts opts
                           :init-state layout}))))
