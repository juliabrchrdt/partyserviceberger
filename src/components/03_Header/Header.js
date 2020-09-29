import React from "react"
import styles from "./Header.module.scss"
import { StartImg, LogoImg, KulinarikImg } from "../00_Lib/Images"

export const HeaderStart = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_start}>
        <StartImg></StartImg>
        <LogoImg></LogoImg>
      </div>
    </div>
  )
}

export const HeaderKulinarik = () => {
  return (
    <div className={styles.header}>
      <KulinarikImg />
    </div>
  )
}
