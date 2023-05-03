import classNames from "classnames";
import styles from "./button.module.css";

const Button = ({ children, ...props }) => {
  return (
    <button className={classNames(styles._button)} {...props}>
      {children}
    </button>
  );
};

export { Button };
