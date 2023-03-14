import DefaultLayout from "src/layouts/DefaultLayout";
import styles from "../../style/GeneralStyles.module.scss";

import FAQTabs from "./examples/BasicExample/FAQTabs";

const AccordionPage = () => {
  return (
    <DefaultLayout>
      <div className={styles.Page}>
        <h1>Accordion</h1>
        <p>Build vertically collapsing accordions in combination with the Collapse component</p>
        <h2>Examples</h2>
        <p>Click the accordions below to expand/collapse the accordion content.</p>
        <FAQTabs />
      </div>
    </DefaultLayout>
  );
};

export default AccordionPage;
