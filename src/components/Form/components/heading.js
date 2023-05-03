import styles from "./style.module.css";

const Heading = ({ title }) => {
  return <h2 className={styles.form_heading}>{title}</h2>;
};

export { Heading };
