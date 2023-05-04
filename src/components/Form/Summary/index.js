import classNames from "classnames";
import styles from "./summary.module.css";
import { useMultiForm } from "../../../stores";
import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";
import { ButtonGroup } from "../components/buttonGroup";

export const Summary = () => {
  const [currentStepId, updateCurrentStep] = useMultiForm((state) => [
    state.currentStepId,
    state.updateCurrentStep,
  ]);
  const [formData, currentTiming] = useMultiForm((state) => [
    state.form,
    state.currentTiming,
  ]);

  const [isFormSubmitted, updateSubmitForm] = useMultiForm(
    ({ isFormSubmitted, updateSubmitForm }) => [
      isFormSubmitted,
      updateSubmitForm,
    ]
  );

  if (currentStepId != 4 || isFormSubmitted) {
    return null;
  }

  const totalValue = () => {
    let sum = 0;
    sum += formData.plan.price[currentTiming];

    if (formData.addOn.length > 0) {
      formData.addOn.forEach(
        (eachAddOn) => (sum += eachAddOn.price[currentTiming])
      );
    }
    return sum;
  };

  const handleChangeClick = () => {
    updateCurrentStep(2);
  };

  const handleConfirmClick = () => {
    updateSubmitForm(true);
  };
  return (
    <div
      className={classNames(styles.summary_container, {
        [styles.summary_container_hidden]: currentStepId != 4,
      })}
    >
      <Heading title={"Finishing up"} />
      <Subheading
        subTitle={"Double-check everything looks OK before confirming."}
      />
      <div className={styles.summary_details}>
        <div className={styles.form_details}>
          <div className={styles.plan_details}>
            <div>
              <span className={styles.plan_title}>
                {formData.plan.title}{" "}
                {currentTiming == "month" ? "(Monthly)" : "(Yearly)"}
              </span>
              <br />
              <button
                onClick={handleChangeClick}
                type="button"
                className={styles.plan_change_button}
              >
                Change
              </button>
            </div>
            <span className={styles.plan_price}>
              +${formData.plan.price[currentTiming]}/
              {currentTiming == "month" ? "mo" : "yr"}
            </span>
          </div>
          {formData.addOn?.length > 0 && (
            <div className={styles.addOns_details}>
              {formData.addOn.map((eachAddOn) => {
                return (
                  <div key={eachAddOn.id} className={styles.summary_addon}>
                    <span className={styles.summary_addon_title}>
                      {eachAddOn.title}
                    </span>
                    <span className={styles.summary_addon_price}>
                      +${eachAddOn.price[currentTiming]}/
                      {currentTiming == "month" ? "mo" : "yr"}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className={styles.summary_total_container}>
          <span className={styles.summary_total_text}>
            Total (per {currentTiming})
          </span>
          <span className={styles.summary_total_price}>
            +${totalValue()}/{currentTiming == "month" ? "mo" : "yr"}
          </span>
        </div>
      </div>
      <ButtonGroup
        primaryButtonStyle={{ backgroundColor: "var(--Purplish_blue)" }}
        type="button"
        primaryButtonClick={handleConfirmClick}
        primaryButtonText="Confirm"
      />
    </div>
  );
};
