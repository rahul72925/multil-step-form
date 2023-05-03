import classNames from "classnames";
import { Button } from "../../button";
import styles from "./style.module.css";
import { useMultiForm } from "../../../stores";
const ButtonGroup = () => {
  const currentStepId = useMultiForm((state) => state.currentStepId);
  const updateCurrentStep = useMultiForm((state) => state.updateCurrentStep);
  const handleGoBack = () => {
    updateCurrentStep(currentStepId - 1);
  };
  return (
    <div className={classNames(styles.form_button_group)}>
      <Button>Next Step</Button>
      <span
        className={classNames(styles.form_button_group_go_back_btn, {
          [styles.hide]: currentStepId == 1,
        })}
        onClick={handleGoBack}
      >
        Go Back
      </span>
    </div>
  );
};

export { ButtonGroup };
