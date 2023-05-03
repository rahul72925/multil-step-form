import classNames from "classnames";
import styles from "./style.module.css";

export const Toggle = ({
  options,
  setCurrentToggleValue,
  currentToggleValue,
}) => {
  const handleOnChange = (e) => {
    const { checked } = e.target;
    setCurrentToggleValue(checked ? options[1].value : options[0].value);
  };

  return (
    <div className={styles.toggle}>
      <span
        className={classNames("", {
          [styles.toggle_label_active]: currentToggleValue == options[0].value,
        })}
      >
        {options[0].title}
      </span>
      <label className={styles.switch}>
        <input type="checkbox" onChange={handleOnChange} />
        <span
          className={classNames(styles.slider, { [styles.round]: true })}
        ></span>
      </label>
      <span
        className={classNames("", {
          [styles.toggle_label_active]: currentToggleValue == options[1].value,
        })}
      >
        {options[1].title}
      </span>
    </div>
  );
};
