
import DefaultLayout from "src/layouts/DefaultLayout";
import BasicExamples from "./examples/BasicExample";
import styles from "../../style/GeneralStyles.module.scss";
import LinksExamples from "./examples/LinksExample";
import AlertDismissibleExamples from "./examples/AlertDismissibleExample";
import AlertDismissibles from "./examples/AlertDismissible";
import AlertAPI from "./tables/AlertAPI";

const AlertPage = () => {
  return (
    <DefaultLayout>
      <div className={styles.Page}>
        <h2>Alerts</h2>
        <p>
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages.
        </p>
        <h2>Examples</h2>
        <div className={styles.Example}>
          <BasicExamples.BasicExample />
        </div>
        <div className={styles.Example}>
          <BasicExamples.BasicExampleCode />
        </div>
        <h2>Links</h2>
        <p>For links, use the Alert.Link component to provide matching colored links within any alert.</p>
        <div className={styles.Example}>
            <LinksExamples.LinksExample />
        </div>
        <div className={styles.Example}>
            <LinksExamples.LinksExampleCode />
        </div>
        <h2>Dismissing</h2>
        <p>Add the dismissible prop to add a functioning dismiss button to the Alert.</p>
        <div className={styles.Example}>
          <AlertDismissibleExamples.AlertDismissibleExample />
        </div>
        <div className={styles.Example}>
          <AlertDismissibleExamples.AlertDismissibleExampleCode />
        </div>
        <p>You can also control the visual state directly which is great if you want to build more complicated alerts.</p>
        <div className={styles.Example}>
          <AlertDismissibles.AlertDismissible />
        </div>
        <div className={styles.Example}>
          <AlertDismissibles.AlertDismissibleCode />
        </div>
        <AlertAPI />
      </div>
    </DefaultLayout>
  );
};

export default AlertPage;
