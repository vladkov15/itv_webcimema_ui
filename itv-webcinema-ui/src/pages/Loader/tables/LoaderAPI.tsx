
import styles from '../../../style/GeneralStyles.module.scss'

const LoaderAPI = () => {
  return (
    <div>
      <h2>Loader</h2>
      <p>{'import { Loader } from "@ui/index";'}</p>
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
            <td>'border | 'grow</td>
            <td>'border</td>
            <td>Manually set the visual state of loader</td>
          </tr>
          <tr>
            <td>size</td>
            <td>'lg' | 'sm'</td>
            <td></td>
            <td>
               Set size loader
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoaderAPI;
