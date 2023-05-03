import styles from "./style.module.css";

const Subheading = ({ subTitle }) => {
  return <h3 className={styles.form_subheading}>{subTitle}</h3>;
};

export { Subheading };
