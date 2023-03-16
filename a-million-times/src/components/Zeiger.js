import React from 'react'
import styles from './Zeiger.module.css'

export default function UhrEinzeln() {
  return (
      <div className={styles.main}>{
        <div id={styles.rotate} className={'zeiger rotating'}>{}</div>
      }</div>
  )
}


