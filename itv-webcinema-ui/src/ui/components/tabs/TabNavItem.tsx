import createWithPrefix from '../../utils/createWithPrefix'

import styles from './Tabs.module.scss'

export default createWithPrefix('tab-nav-item', {
  defaultProps: { className: styles['tab-nav-item'] },
})
