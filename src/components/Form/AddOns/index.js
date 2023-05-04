import classNames from "classnames";
import styles from "./addOns.module.css";
import { useMultiForm } from "../../../stores";
import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";
import { useState } from "react";
import { ButtonGroup } from "../components/buttonGroup";

const AddOns = () => {
  const [currentStepId, updateCurrentStep] = useMultiForm((state) => [
    state.currentStepId,
    state.updateCurrentStep,
  ]);
  const [currentTiming, updateForm] = useMultiForm((state) => [
    state.currentTiming,
    state.updateForm,
  ]);

  const [selectedAddOn, setSelectedAddOn] = useState([]);

  const handleAddOnClick = (addOn) => {
    setSelectedAddOn((prev) => {
      const found = prev.find((sao) => sao.id == addOn.id);
      return found
        ? prev.filter((sao) => sao.id !== addOn.id)
        : prev.concat(addOn);
    });
  };

  const handleSubmit = () => {
    if (selectedAddOn) {
      updateForm(selectedAddOn, "addOn");
    }
    updateCurrentStep(4);
  };

  const handleOnCheck = () => {};
  return (
    <div
      className={classNames(styles.addOns_container, {
        [styles.addons_container_hidden]: currentStepId != 3,
      })}
    >
      <Heading title={"Pick add-ons"} />
      <Subheading subTitle={"Add-ons help enhance your gaming experience."} />
      <div className={styles.addOns__list}>
        {availableAddOns.map((eachAddOn) => {
          return (
            <div
              className={classNames(styles.each_addOn, {
                [styles.each_addOn_selected]: !!selectedAddOn.find(
                  (each) => each.id == eachAddOn.id
                ),
              })}
              key={eachAddOn.id}
              onClick={() => handleAddOnClick(eachAddOn)}
            >
              <input
                type="checkbox"
                checked={
                  !!selectedAddOn.find((each) => each.id == eachAddOn.id)
                }
                onChange={handleOnCheck}
              />
              <div>
                <span className={styles.addon_title}>{eachAddOn.title}</span>
                <br />
                <span className={styles.addon_subTitle}>
                  {eachAddOn.subTitle}
                </span>
              </div>
              <span>
                ${eachAddOn.price[currentTiming]}/
                {currentTiming == "month" ? "mo" : "yr"}
              </span>
            </div>
          );
        })}
        <ButtonGroup primaryButtonClick={handleSubmit} type="button" />
      </div>
    </div>
  );
};

const availableAddOns = [
  {
    id: 1,
    title: "Online Service",
    subTitle: "Access to multiplayer games",
    price: {
      month: 1,
      year: 10,
    },
  },
  {
    id: 2,
    title: "Larger storage",
    subTitle: "Extra 1TB of cloud save",
    price: {
      month: 2,
      year: 20,
    },
  },
  {
    id: 3,
    title: "Customizable profile",
    subTitle: "Custom theme on your profile",
    price: {
      month: 2,
      year: 20,
    },
  },
];

export { AddOns };
