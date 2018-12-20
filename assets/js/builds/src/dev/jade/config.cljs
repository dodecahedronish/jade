(ns jade.config)

(defn add-main-transition [handed-state config]
  (let [main-transition {:duration .6
                         ;;:trans-init {:x 0}
                         ;;:trans-in {:y 0 :z 0 :x 0}
                         ;;:trans-out {:x -100}
                         }
        init-state (merge config main-transition handed-state)]
    init-state))
