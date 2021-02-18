import React from "react"
import styles from "./Header.module.scss"
import ImageProvider from "../00_Lib/ImageProvider"

export const Header = props => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>

        <div className={styles.header__position}>

          <ImageProvider
            styling={props.styling}
            alt={props.alt}
            filename={props.filename}
          />
        </div>

        <div className={styles.header__logo}>
          <ImageProvider alt={props.alt} filename={props.fileLogo} />

        </div>
        <h1 className={styles.header__title}>{props.title}</h1>
      </div>
    </div>
  )
}
