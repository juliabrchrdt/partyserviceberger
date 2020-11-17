import React from "react"
import { Link } from "gatsby"
import styles from "../04_TextBox/Textbox.module.scss"
import { TeamImg } from "../00_Lib/Images"
import data from "./TextboxData"

const TextBox = ({ title, text }) => {
  return (
    <div className={styles.textbox}>
      {data.map(data => {
        const { id, title, text } = data
        return (
          <div key={id} className={styles.textbox__content}>
            <h1 className={styles.textbox__title}>{title}</h1>
            <p className={styles.textbox__text}>{text}</p>
            <Link to="/kontakt" className={styles.textbox__link}>
              mehr über uns
            </Link>
            <div className={styles.textbox__signature}>
              Alfred & Sabine Berger
            </div>
          </div>
        )
      })}
      <div className={styles.textbox__img}>
        <TeamImg />
      </div>
    </div>
  )
}

export default TextBox
