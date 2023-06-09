import {
  AddOns,
  PersonalInfo,
  SelectPlan,
  Summary,
  ThankYou,
} from "../../components";
import { Sider } from "../../components/Sider";
import { useMultiForm } from "../../stores";
import styles from "./home.module.css";

const Home = () => {
  const currentStepId = useMultiForm((state) => state.currentStepId);
  const formDetails = useMultiForm((state) => state.form);

  return (
    <div className={styles.home__container}>
      <div className={styles.home__content}>
        <div className={styles.home__sider}>
          <Sider />
        </div>
        <div className={styles.home__form_area}>
          <PersonalInfo />
          <SelectPlan />
          <AddOns />
          <Summary />
          <ThankYou />
        </div>
      </div>
    </div>
  );
};

export { Home };
