(ns jade.components.svg
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [jade.components.panel :refer  [->panel]]
            [jade.components.image-view :refer [->product-view]]
            [jade.components.header :refer [->header]]
            [goog.dom :as gdom]
            [jade.utils :as utils]
            [cljs.core.async :as async :refer [chan pub put! <!]]
            [om-tools.core :refer-macros [defcomponentk]]))

;;<svg viewBox="0 0 100 100" class="icon shape-codepen">
  ;;
;;</svg>

(defcomponentk svg [data owner opts state]
  (render [_]
          (dom/svg {:view-box (:vb data)
                    :class (:class data)
                    :dangerouslySetInnerHtml (str "<use xlink:href='" (:img data) "'></use>" ) })))
