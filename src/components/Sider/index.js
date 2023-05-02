import React from "react";
import styles from "./sider.module.css";
import { useMultiForm } from "../../stores";

const Sider = () => {
  const availableSteps = useMultiForm((state) => state.availableSteps);
  const currentStepId = useMultiForm((state) => state.currentStepId);
  return (
    <div className={styles.home__sider_container}>
      {availableSteps.map((eachStep) => {
        return (
          <div className={styles.home__sider_step} key={eachStep.id}>
            <span
              className={`${styles.home__sider_step_number} ${
                currentStepId == eachStep.id
                  ? styles.home__sider_step_number_active
                  : ""
              }`}
            >
              {eachStep.id}
            </span>
            <div className={styles.home__sider_step_info}>
              <span className={styles.home__sider_step_text}>
                STEP {eachStep.id}
              </span>
              <br />
              <span className={styles.home__sider_step_name}>
                {eachStep.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Sider };
