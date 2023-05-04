import React from "react";
import styles from "./personalInfo.module.css";
import { InputField } from "../../inputField";
import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";
import { Formik } from "formik";
import { Button } from "../../button";
import { ButtonGroup } from "../components/buttonGroup";
import { useMultiForm } from "../../../stores";
import classNames from "classnames";

const PersonalInfo = () => {
  const [formData, updateForm] = useMultiForm((state) => [
    state.form,
    state.updateForm,
  ]);
  const [currentStepId, updateCurrentStep] = useMultiForm((state) => [
    state.currentStepId,
    state.updateCurrentStep,
  ]);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "This field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.name) {
      errors.name = "This field is required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "This field is required";
    }
    return errors;
  };

  const onSubmit = (values) => {
    updateForm(values, "userInfo");
    updateCurrentStep(2);
  };

  if (currentStepId != 1) {
    return null;
  }

  return (
    <div
      className={classNames(styles.home__form_personal_info_container, {
        [styles.personal__hidden]: currentStepId !== 1,
      })}
    >
      <Heading title={"Personal Info"} />
      <Subheading
        subTitle={"Please provide your name, email and phone number."}
      />
      <Formik
        initialValues={{
          name: formData.userInfo?.name || "",
          email: formData.userInfo?.email || "",
          phoneNumber: formData.userInfo?.phoneNumber || "",
        }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <InputField
              key={"name"}
              label={"Name"}
              name="name"
              value={values.name}
              onBlur={handleBlur}
              placeholder={"e.g. Stephen King"}
              type="text"
              hasError={errors.name && touched.name && errors.name}
              required
              onChange={handleChange}
            />
            <br />
            <InputField
              key={"eamil_address"}
              label={"Email Address"}
              placeholder={"e.g. stephenking@lorem.com"}
              type="email"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              hasError={errors.email && touched.email && errors.email}
              required
              onChange={handleChange}
              errorMessage={errors.email}
            />
            <br />

            <InputField
              key={"phone_number"}
              label={"Phone Number"}
              placeholder={"e.g. +1 789089"}
              type="tel"
              required
              name="phoneNumber"
              value={values.phoneNumber}
              onBlur={handleBlur}
              hasError={
                errors.phoneNumber && touched.phoneNumber && errors.phoneNumber
              }
              onChange={handleChange}
            />
            <ButtonGroup />
          </form>
        )}
      </Formik>
    </div>
  );
};

export { PersonalInfo };
