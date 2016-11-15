// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


const Tag = ({children}) => (
  <span className={styles.tag}>
    {children}
  </span>
)

Tag.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Tag