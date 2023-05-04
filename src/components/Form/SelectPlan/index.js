import classNames from "classnames";
import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";
import styles from "./selectPlan.module.css";
import { useMultiForm } from "../../../stores";
import { ButtonGroup } from "../components/buttonGroup";
import { Advance, Arcade, Pro } from "../../../assets/svg";
import { Toggle } from "../components/toggle";
import { useState } from "react";

const SelectPlan = () => {
  const [currentStepId, updateCurrentStep] = useMultiForm((state) => [
    state.currentStepId,
    state.updateCurrentStep,
  ]);
  const [currentTiming, updateCurrentTiming] = useMultiForm((state) => [
    state.currentTiming,
    state.updateCurrentTiming,
  ]);

  const updateForm = useMultiForm((state) => state.updateForm);

  const [currentPlan, setCurrentPlan] = useState(availablePlan[0]);

  const handleSelectPlan = (data) => {
    setCurrentPlan(data);
  };

  const primaryButtonClick = () => {
    updateForm(currentPlan, "plan");
    updateCurrentStep(3);
  };
  return (
    <div
      className={classNames(styles.select_plan_container, {
        [styles.select_plan_hidden]: currentStepId !== 2,
      })}
    >
      <Heading title={"Select your plan"} />
      <Subheading
        subTitle={"Please provide your name, email and phone number."}
      />
      <div className={classNames(styles.select_plan_available_plans)}>
        {availablePlan.map(({ id, icon: Icon, title, price }) => {
          return (
            <div
              className={classNames(styles.each_plan, {
                [styles.each_plan_selected]: currentPlan?.id == id,
              })}
              key={id}
              onClick={() =>
                handleSelectPlan({
                  id,
                  title,
                  price,
                })
              }
            >
              <Icon />
              <div className={styles.each_plan_details}>
                <span className={styles.each_plan_title}>{title}</span>
                <br />
                <span className={styles.each_plan_price}>
                  ${price[currentTiming]}/
                  {currentTiming == "month" ? "mo" : "yr"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <Toggle
        options={toggleOptions}
        setCurrentToggleValue={updateCurrentTiming}
        currentToggleValue={currentTiming}
      />
      <ButtonGroup type="button" primaryButtonClick={primaryButtonClick} />
    </div>
  );
};

const availablePlan = [
  {
    id: 1,
    icon: Arcade,
    title: "Arcade",
    price: {
      month: 9,
      year: 90,
    },
  },
  {
    id: 2,
    icon: Advance,
    title: "Advance",
    price: {
      month: 12,
      year: 120,
    },
  },
  {
    id: 3,
    icon: Pro,
    title: "Pro",
    price: {
      month: 15,
      year: 150,
    },
  },
];

const toggleOptions = [
  { title: "Monthly", value: "month" },
  { title: "Yearly", value: "year" },
];
export { SelectPlan };
