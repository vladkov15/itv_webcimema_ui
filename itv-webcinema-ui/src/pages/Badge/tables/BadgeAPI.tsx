import styles from "../../../style/GeneralStyles.module.scss";

const BadgeAPI = () => {
  return (
    <div>
      <h2>Badge</h2>
      <p>{'import { Badge } from "@ui/index";'}</p>
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
            <td>as</td>
            <td>elementType</td>
            <td>{"<span>"}</td>
            <td>You can use a custom element type for this component.</td>
          </tr>
          <tr>
            <td>bg</td>
            <td>
              'primary' | 'secondary' | 'success' | 'danger' | 'warning' |
              'info' | 'light' | 'dark'
            </td>
            <td>'primary'</td>
            <td>The visual style of the badge</td>
          </tr>
          <tr>
            <td>pill</td>
            <td>boolean</td>
            <td>false</td>
            <td>
              Add the pill modifier to make badges more rounded with some
              additional horizontal padding
            </td>
          </tr>
          <tr>
            <td>text</td>
            <td>
              'primary' | 'secondary' | 'success' | 'danger' | 'warning' |
              'info' | 'light' | 'dark'
            </td>
            <td></td>
            <td>Sets badge text color</td>
          </tr>
          <tr>
            <td>bsPrefix</td>
            <td>string</td>
            <td>'badge'</td>
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

export default BadgeAPI;
