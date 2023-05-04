import { ThanksYou } from "../../../assets/svg";
import { useMultiForm } from "../../../stores";
import styles from "./thankYou.module.css";

export const ThankYou = () => {
  const isFormSubmitted = useMultiForm((state) => state.isFormSubmitted);

  if (!isFormSubmitted) {
    return null;
  }
  return (
    <section className={styles.thank_you_section}>
      <header>
        <ThanksYou />
      </header>
      <section className={styles.thank_you_content}>
        <h1>Thanks you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </section>
    </section>
  );
};
