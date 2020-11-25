import React from "react"
import styles from "./Header.module.scss"
import ImageProvider from "../00_Lib/ImageProvider"
import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github'



export const Header = props => {
  return (
<div className={styles.box}>
    <div className={styles.header}>

      <div className={styles.header__position}>
        <ImageProvider
          styling={{ height: "111%" }}
          alt={props.alt}
          filename={props.filename}
        />
      </div>

      <div className={styles.header__logo}>
        <ImageProvider alt={props.alt} filename={props.fileLogo} />

        <h1 className={styles.header__title}>{props.title}</h1>
      </div>
    </div>
 
</div>

  )
}
