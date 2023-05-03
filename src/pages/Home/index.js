import { PersonalInfo, SelectPlan } from "../../components";
import { Sider } from "../../components/Sider";
import { useMultiForm } from "../../stores";
import styles from "./home.module.css";

const Home = () => {
  const currentStepId = useMultiForm((state) => state.currentStepId);
  const formDetails = useMultiForm((state) => state.form);

  // console.log("form details", formDetails);

  return (
    <div className={styles.home__container}>
      <div className={styles.home__content}>
        <div className={styles.home__sider}>
          <Sider />
        </div>
        <div className={styles.home__form_area}>
          <PersonalInfo />
          <SelectPlan />
        </div>
      </div>
    </div>
  );
};

export { Home };
