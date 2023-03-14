import styles from "../../../style/GeneralStyles.module.scss";

const ModalAPI = () => {
  return (
    <div>
      <h2>Modal</h2>
      <p>{'import { Modal } from "@ui/index";'}</p>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>animations</td>
            <td>boolean</td>
            <td>true</td>
            <td>Open and close the Modal with a slide and fade animation.</td>
          </tr>
          <tr>
            <td>autoFocus</td>
            <td>boolean</td>
            <td>true</td>
            <td>
              When true The modal will automatically shift focus to itself when
              it opens, and replace it to the last focused element when it
              closes. Generally this should never be set to false as it makes
              the Modal less accessible to assistive technologies, like
              screen-readers.
            </td>
          </tr>
          <tr>
            <td>backdrop</td>
            <td>'static' | true | false</td>
            <td>true</td>
            <td>
              Include a backdrop component. Specify 'static' for a backdrop that
              doesn't trigger an "onHide" when clicked
            </td>
          </tr>
          <tr>
            <td>backdropClassName</td>
            <td>string</td>
            <td></td>
            <td>
              Add an optional extra class name to .modal-backdrop It could end
              up looking like class="modal-backdrop foo-modal-backdrop in".
            </td>
          </tr>
          <tr>
            <td>centered</td>
            <td>boolean</td>
            <td></td>
            <td>vertically center the Dialog in the window</td>
          </tr>
          <tr>
            <td>container</td>
            <td>any</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>contentClassName</td>
            <td>string</td>
            <td></td>
            <td>Add an optional extra class name to .modal-content</td>
          </tr>
          <tr>
            <td>enforceFocus</td>
            <td>boolean</td>
            <td>true</td>
            <td>
              When true The modal will prevent focus from leaving the Modal
              while open. Consider leaving the default value here, as it is
              necessary to make the Modal work well with assistive technologies,
              such as screen readers.
            </td>
          </tr>
          <tr>
            <td>fullscreen</td>
            <td>
              true | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down'
            </td>
            <td></td>
            <td>
              Renders a fullscreen modal. Specifying a breakpoint will render
              the modal as fullscreen below the breakpoint size.
            </td>
          </tr>
          <tr>
            <td>keyboard</td>
            <td>boolean</td>
            <td>true</td>
            <td>Close the modal when escape key is pressed</td>
          </tr>
          <tr>
            <td>show</td>
            <td>boolean</td>
            <td>false</td>
            <td>When true The modal will show itself.</td>
          </tr>
          <tr>
            <td>size</td>
            <td>'sm' | 'lg' | 'xl'</td>
            <td></td>
            <td>
              Render a large, extra large or small modal. When not provided, the
              modal is rendered with medium (default) size.
            </td>
          </tr>
          <tr>
            <td>bsPrefix</td>
            <td>string</td>
            <td>'modal'</td>
            <td>
              Change the underlying component CSS base class name and modifier
              class names prefix. This is an escape hatch for working with
              heavily customized bootstrap css.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ModalAPI;
