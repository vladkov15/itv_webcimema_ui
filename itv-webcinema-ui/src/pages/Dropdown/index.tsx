import DefaultLayout from "src/layouts/DefaultLayout";
import styles from "../../style/GeneralStyles.module.scss";
import BasicExamples from "./examples/BasicExample";
const DropdownPage = () => {
  return (
    <DefaultLayout>
      <div className={styles.Page}>
        <h1>Dropdowns</h1>
        <p>Toggle contextual overlays for displaying lists of links </p>
        <h2>Overview</h2>
        <p>
          Dropdowns are toggleable, contextual overlays for displaying lists of
          links and more. Like overlays, Dropdowns are built using a third-party
          library Popper.js, which provides dynamic positioning and viewport
          detection.
        </p>
        <h2>Accessibility</h2>
        <p>
          The WAI ARIA standard defines a role="menu" widget, but it's very
          specific to a certain kind of menu. ARIA menus, must only contain
          role="menuitem", role="menuitemcheckbox", or role="menuitemradio". On
          the other hand, Bootstrap's dropdowns are designed to more generic and
          application in a variety of situations. For this reason we don't
          automatically add the menu roles to the markup. We do implement some
          basic keyboard navigation, and if you do provide the "menu" role,
          react-bootstrap will do its best to ensure the focus management is
          compliant with the ARIA authoring guidelines for menus.
        </p>
        <h2>Examples</h2>
        <br />
        <h2>Single button dropdowns</h2>
        <p>
          The basic Dropdown is composed of a wrapping Dropdown and inner{" "}
          {
            "<DropdownMenu>, and <DropdownToggle>. By default the <DropdownToggle>"
          }{" "}
          will render a Button component and accepts all the same props.
        </p>
        <div className={styles.Example}>
          <BasicExamples.BasicExample /> 
        </div>
        <div className={styles.Example}>
          <BasicExamples.BasicExampleCode /> 
        </div>
        
      </div>
    </DefaultLayout>
  );
};

export default DropdownPage;
