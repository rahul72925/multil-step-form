import classNames from "classnames";
import styles from "./button.module.css";

const Button = ({ children }) => {
  return <button className={classNames(styles._button)}>{children}</button>;
};

export { Button };
