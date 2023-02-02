import createWithPrefix from '../../utils/createWithPrefix'

import styles from './Modal.module.scss'

export default createWithPrefix('modal-footer', {
  defaultProps: { className: styles['modal-footer'] },
})
