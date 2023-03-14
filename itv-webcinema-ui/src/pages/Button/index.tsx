
import DefaultLayout from "src/layouts/DefaultLayout";
import styles from "../../style/GeneralStyles.module.scss";
import TypesExamples from "./examples/TypesExample";
import TagTypesExamples from "./examples/TagTypesExample";
import SizesExamples from "./examples/SizesExample";
import ActiveExamples from "./examples/ActiveExample";
import DisabledExamples from "./examples/DisabledExample";
import LoadingButtons from "./examples/LoadingButton";
import ToggleButtonExamples from "./examples/ToggleButtonExample";
import ToggleButtonsGroupUncontrolled from "./examples/ToggleButtonGroupUncontrolled";
import ButtonAPI from "./tables/ButtonAPI";
import ToggleButtonGroupAPI from "./tables/ToggleButtonGroupAPI";
import ButtonCloseExamples from "./examples/ButtonCloseExample";


const ButtonPage = () => {
 

  return (
    <DefaultLayout>
      <div className={styles.Page}>
        <h1>Buttons</h1>
        <p>
          Use custom button styles for actions in forms, dialogs, and more with
          support for multiple sizes, states, and more.
        </p>
        <h2>Examples</h2>
        <p>
          Use any of the available button style types to quickly create a styled
          button. Just modify the variant prop.
        </p>
        <div className={styles.Example}>
          <TypesExamples.TypesExample />
        </div>
        <div className={styles.Example}>
          <TypesExamples.TypesExampleCode />
        </div>
        <h2>Button tags</h2>
        <p>
          {
            "Normally <Button> components will render a HTML <button> element. However you can render whatever you d like, adding a href prop will automatically render an <a /> element. You can use the as prop to render whatever your heart desires. React Bootstrap will take care of the proper ARIA roles for you."
          }
        </p>
        <div className={styles.Example}>
          <TagTypesExamples.TagTypesExample />
        </div>
        <div className={styles.Example}>
          <TagTypesExamples.TagTypesExampleCode />
        </div>
        <h2>Sizes</h2>
        <p>Add props size='sm' for additional sizes.</p>
        <div className={styles.Example}>
          <SizesExamples.SizesExample />
        </div>
        <div className={styles.Example}>
          <SizesExamples.SizesExampleCode />
        </div>
        <h2>Active state</h2>
        <p>
          To set a button's active state simply set the component's active prop.
        </p>
        <div className={styles.Example}>
          <ActiveExamples.ActiveExample />
        </div>
        <div className={styles.Example}>
          <ActiveExamples.ActiveExampleCode />
        </div>
        <h2>Disabled state</h2>
        <p>Make buttons look inactive by adding the disabled prop to.</p>
        <div className={styles.Example}>
          <DisabledExamples.DisabledExample />
        </div>
        <div className={styles.Example}>
          <DisabledExamples.DisabledExampleCode />
        </div>
        <h2>Button loading state</h2>
        <p>
          {
            "When activating an asynchronous action from a button it is a good UX pattern to give the user feedback as to the loading state, this can easily be done by updating your <Button />s props from a state change like below."
          }
        </p>
        <div className={styles.Example}>
          <LoadingButtons.LoadingButton />
        </div>
        <div className={styles.Example}>
          <LoadingButtons.LoadingButtonCode />
        </div>
        <h2>Close Button</h2>
        <p>this component styled for close page or close modak and etc</p>
        <div className={styles.Example}>
            <ButtonCloseExamples.ButtonCloseExample />
            </div>
        <div className={styles.Example}>
            <ButtonCloseExamples.ButtonCloseExampleCode />
        </div>
        <h2>Checkbox / Radio</h2>
        <p>
          Buttons can also be used to style checkbox and radio form elements.
          This is helpful when you want a toggle button that works neatly inside
          an HTML form.
        </p>
        <div className={styles.Example}>
          <ToggleButtonExamples.ToggleButtonExample />
        </div>
        <div className={styles.Example}>
          <ToggleButtonExamples.ToggleButtonExampleCode />
        </div>
        <h2>Controlled</h2>
        <div className={styles.Example}>
          <ToggleButtonsGroupUncontrolled.ToggleButtonGroupUncontrolled />
        </div>
        <div className={styles.Example}>
          <ToggleButtonsGroupUncontrolled.ToggleButtonGroupUncontrolledCode />
        </div>
        <h1>API</h1>
        <ButtonAPI />
        <br />
        <ToggleButtonGroupAPI />
      </div>
    </DefaultLayout>
  );
};

export default ButtonPage;
