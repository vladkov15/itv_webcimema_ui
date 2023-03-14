
import DefaultLayout from "src/layouts/DefaultLayout";
import styles from '../style/GeneralStyles.module.scss'

const MainPage = () => {
  return (
    <DefaultLayout>
      <div className={styles.Page}>
        <h1>Documentation itv-website-ui</h1>
      </div>
    </DefaultLayout>
  );
};

export default MainPage;
