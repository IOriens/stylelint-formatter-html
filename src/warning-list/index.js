import PropTypes from 'prop-types'
import React from 'react'
import Warning from '../warning'

import styles from './index.css'

const WarningList = ({ warnings }) => {
  // remove duplicated warnings
  warnings = Array.from(new Set(warnings.map(warn => JSON.stringify(warn))))
  warnings = warnings.map(item => JSON.parse(item))
  let messages
  if (warnings.length === 0) {
    messages = <li className={styles.success}>✔ No warnings</li>
  } else {
    messages = warnings.map(w => {
      return (
        <Warning
          key={`${w.line}${w.column}${w.rule}`}
          line={w.line}
          column={w.column}
          text={w.text}
          rule={w.rule}
          severity={w.severity}
        />
      )
    })
  }
  return <ul className={styles.root}> {messages} </ul>
}

WarningList.propTypes = {
  warnings: PropTypes.array.isRequired
}

export default WarningList
