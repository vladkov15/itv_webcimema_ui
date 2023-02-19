

import {Accordion} from '@ui/index'
import DefaultLayout from "src/layouts/DefaultLayout";
import styles from '../../style/GeneralStyles.module.scss'
import BasicExample from './examples/BasicExample';

const AccordionPage = () => {
  return (
    <DefaultLayout>
    <div className={styles.Accordion}>
      <div className={styles.Header}>
        <h1>Accordion</h1>
        <p>
          Build vertically collapsing accordions in combination with the
          Collapse component
        </p>
      </div>
      <div className={styles.Examples}>
        <h2>Examples</h2>
        <div className={styles.Example__Header}>
          <h2>Basic Example</h2>
        </div>
        <div className={styles.Exaple__Body}>
        <BasicExample />
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
};

export default AccordionPage;
