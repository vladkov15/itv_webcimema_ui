
import DefaultLayout from "src/layouts/DefaultLayout";
import styles from "../../style/GeneralStyles.module.scss";
import TypesExample from "./examples/TypesExample";
import TagTypesExample from "./examples/TagTypesExample";
import SizesExample from "./examples/SizesExample";
import ActiveExample from "./examples/ActiveExample";
import DisabledExample from "./examples/DisabledExample";
import LoadingButton from "./examples/LoadingButton";
import ToggleButtonExample from "./examples/ToggleButtonExample";
import ToggleButtonGroupUncontrolled from "./examples/ToggleButtonGroupUncontrolled";
import ButtonAPI from "./tables/ButtonAPI";
import ToggleButtonGroupAPI from "./tables/ToggleButtonGroupAPI";


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
          <TypesExample />
        </div>
        <h2>Button tags</h2>
        <p>
          {
            "Normally <Button> components will render a HTML <button> element. However you can render whatever you d like, adding a href prop will automatically render an <a /> element. You can use the as prop to render whatever your heart desires. React Bootstrap will take care of the proper ARIA roles for you."
          }
        </p>
        <div className={styles.Example}>
          <TagTypesExample />
        </div>
        <h2>Sizes</h2>
        <p>Add props size='sm' for additional sizes.</p>
        <div className={styles.Example}>
          <SizesExample />
        </div>
        <h2>Active state</h2>
        <p>
          To set a button's active state simply set the component's active prop.
        </p>
        <div className={styles.Example}>
          <ActiveExample />
        </div>
        <h2>Disabled state</h2>
        <p>Make buttons look inactive by adding the disabled prop to.</p>
        <div className={styles.Example}>
          <DisabledExample />
        </div>
        <h2>Button loading state</h2>
        <p>
          {
            "When activating an asynchronous action from a button it is a good UX pattern to give the user feedback as to the loading state, this can easily be done by updating your <Button />s props from a state change like below."
          }
        </p>
        <div className={styles.Example}>
          <LoadingButton />
        </div>
        <h2>Checkbox / Radio</h2>
        <p>
          Buttons can also be used to style checkbox and radio form elements.
          This is helpful when you want a toggle button that works neatly inside
          an HTML form.
        </p>
        <div className={styles.Example}>
          <ToggleButtonExample />
        </div>
        <h2>Controlled</h2>
        <div className={styles.Example}>
          <ToggleButtonGroupUncontrolled />
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
