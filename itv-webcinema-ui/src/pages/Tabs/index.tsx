import DefaultLayout from "src/layouts/DefaultLayout";
import styles from "../../style/GeneralStyles.module.scss";
import ControlledTabsExamples from "./examples/ControlledTabsExample";
import UncontrolledExamples from "./examples/UncontrolledExample";

const TabsPage = () => {
  return (
    <DefaultLayout>
      <div className={styles.Page}>
        <h1>Tabbed components</h1>
        <p>Dynamic tabbed interfaces</p>
        <h2>Examples</h2>
        <p>
          Create dynamic tabbed interfaces, as described in the WAI ARIA
          Authoring Practices. Tabs is a higher-level component for quickly
          creating a Nav matched with a set of TabPanes.
        </p>
        <div className={styles.Example}>
          <UncontrolledExamples.UncontrolledExample />
        </div>
        <div className={styles.Example}>
          <UncontrolledExamples.UncontrolledExampleCode />
        </div>
        <h2>Controlled</h2>
        <p>
          Tabs can be controlled directly when you want to handle the selection
          logic personally.
        </p>
        <div className={styles.Example}>
            <ControlledTabsExamples.ControlledTabsExample />
        </div>
        
        <div className={styles.Example}>
            <ControlledTabsExamples.ControlledTabsExampleCode />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TabsPage;
