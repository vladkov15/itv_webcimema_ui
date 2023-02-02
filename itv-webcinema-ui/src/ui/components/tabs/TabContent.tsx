import createWithBsPrefix from '../../utils/createWithPrefix'

import styles from './Tabs.module.scss'

export default createWithBsPrefix('tab-content', {
  defaultProps: { className: styles['tab-content'] },
})
