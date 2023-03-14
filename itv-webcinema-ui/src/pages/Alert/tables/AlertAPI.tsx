import styles from "../../../style/GeneralStyles.module.scss";

const AlertAPI = () => {
  return (
    <div>
      <h2>Alert</h2>
      <p>{'import { Alert } from "@ui/index";'}</p>
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
            <td>variant</td>
            <td>
              'primary' | 'secondary' | 'success' | 'danger' | 'warning' |
              'info' | 'dark' | 'light'
            </td>
            <td>'primary'</td>
            <td>The Alert visual variant</td>
          </tr>
          <tr>
            <td>full</td>
            <td>boolean</td>
            <td>false</td>
            <td>Take all free space for alert</td>
          </tr>
          <tr>
            <td>dismissible</td>
            <td>boolean</td>
            <td></td>
            <td>
              Renders a properly aligned dismiss button, as well as adding extra
              horizontal padding to the Alert.
            </td>
          </tr>
          <tr>
            <td>dismissibleProps</td>
            <td>ButtonCloseProps</td>
            <td></td>
            <td>Props to build more complicated alerts.</td>
          </tr>
          <tr>
            <td>show</td>
            <td>boolean</td>
            <td>true</td>
            <td>
              controlled by: onClose, initial prop: defaultShow Controls the
              visual state of the Alert.
            </td>
          </tr>
          <tr>
            <td>autohide</td>
            <td>boolean</td>
            <td>false</td>
            <td>Hiding a element on screen automatically.</td>
          </tr>
          <tr>
            <td>delay</td>
            <td>number</td>
            <td>5000</td>
            <td>Show timer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AlertAPI;
