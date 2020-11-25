import React from "react"
import { Link } from "gatsby"
import styles from "../04_TextBox/Textbox.module.scss"
import data from "./TextboxData"
import ImageProvider from "../00_Lib/ImageProvider"

const TextBox = ({ title, text }) => {
  return (
    <div className={styles.diagonalBox}>
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
          <ImageProvider alt={"team"} filename={"team.jpg"} />
        </div>
      </div>
    </div>
  )
}

export default TextBox
