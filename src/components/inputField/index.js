import styles from "./inputField.module.css";

const InputField = ({
  label,
  hasError = false,
  errorMessage = null,
  ...props
}) => {
  return (
    <div className={styles.input_filed_container}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <label>{label}</label>
        {hasError && (
          <span className={styles.input_field_error}>
            {errorMessage || "This field is required"}
          </span>
        )}
      </div>
      <input className={styles.input_field} {...props} />
    </div>
  );
};

export { InputField };
