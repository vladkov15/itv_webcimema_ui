import DefaultLayout from "src/layouts/DefaultLayout";
import styles from "../../style/GeneralStyles.module.scss";

import Examples from "./examples/Example";
import StaticBackdrops from "./examples/StaticBackdrop";
import StaticExamples from "./examples/StaticExample";
import VerticallyCentered from "./examples/VerticallyCentered";
import WithoutAnimations from "./examples/WithoutAnimation";
import ModalAPI from "./tables/ModalAPI";

const ModalPage = () => {
  return (
    <DefaultLayout>
      <div className={styles.Page}>
        <h1>Modal</h1>
        <p>
          Add dialogs to your site for lightboxes, user notifications, or
          completely custom content.
        </p>
        <h2>Examples</h2>
        <h2>Static Markup</h2>
        <p>
          Below is a static modal dialog (without the positioning) to
          demonstrate the look and feel of the Modal.
        </p>
        <div className={styles.Example}>
          <StaticExamples.StaticExample />
        </div>
        <div className={styles.Example}>
          <StaticExamples.StaticExampleCode />
        </div>
        <h2>Live demo</h2>
        <div className={styles.Example}>
          <Examples.Example />
        </div>
        <div className={styles.Example}>
          <Examples.ExampleCode />
        </div>
        <h2>Static backdrop</h2>
        <p>
          When backdrop is set to static, the modal will not close when clicking
          outside it. Click the button below to try it.
        </p>
        <div className={styles.Example}>
          <StaticBackdrops.StaticBackdrop />
        </div>
        <div className={styles.Example}>
          <StaticBackdrops.StaticBackdropCode />
        </div>
        <h2>Without Animation</h2>
        <p>
          A Modal can also be without an animation. For that set the animation
          prop to false.
        </p>
        <div className={styles.Example}>
          <WithoutAnimations.WithoutAnimation />
        </div>
        <div className={styles.Example}>
          <WithoutAnimations.WithoutAnimationCode />
        </div>
        <h2>Vertically centered</h2>
        <p>You can vertically center a modal by passing the centered prop.</p>
        <div className={styles.Example}>
          <VerticallyCentered.App />
        </div>
        <div className={styles.Example}>
          <VerticallyCentered.MyVerticallyCenteredModalCode />
        </div>
        <h2>API</h2>
        <ModalAPI />
      </div>
    </DefaultLayout>
  );
};

export default ModalPage;
