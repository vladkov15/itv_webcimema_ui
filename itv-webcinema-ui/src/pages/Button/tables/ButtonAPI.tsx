
import styles from '../../../style/GeneralStyles.module.scss'

const ButtonAPI = () => {
  return (
    <div>
      <h2>Button</h2>
      <p>{'import { Button } from "@ui/index";'}</p>
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
            <td>active</td>
            <td>boolean</td>
            <td>false</td>
            <td>Manually set the visual state of the button to :active</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
            <td>
              Disables the Button, preventing mouse events, even if the
              underlying component is an link element
            </td>
          </tr>
          <tr>
            <td>href</td>
            <td>string</td>
            <td></td>
            <td>
              Providing a href will render an link element, styled as a button.
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>'sm' </td>
            <td></td>
            <td>Specifies a small button.</td>
          </tr>
          <tr>
            <td>type</td>
            <td>'button' | 'reset' | 'submit' | null</td>
            <td>'button'</td>
            <td>Defines HTML button type attribute.</td>
          </tr>
          <tr>
            <td>variant</td>
            <td>string</td>
            <td>'primary'</td>
            <td>
              One or more button variant combinations buttons may be one of a
              variety of visual variants such as: 'primary', 'secondary',
              'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ButtonAPI;
