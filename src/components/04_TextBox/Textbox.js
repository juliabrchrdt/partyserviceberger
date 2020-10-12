import React from "react"
import { Link } from "gatsby"
import styles from "../04_TextBox/Textbox.module.scss"
import { TeamImg } from "../00_Lib/Images"

const TextBox = () => {
  return (
    <div className={styles.textbox}>
      <div className={styles.textbox__content}>
        <p className={styles.textbox__title}>Herzlich Wilkommen</p>
        <p className={styles.textbox__text}>
          Seit mehr als 30 Jahren haben wir es uns zur Aufgabe gemacht, unsere
          Kunden bei ihren Festlichkeiten kulinarisch zu verwöhnen. Seitdem ist
          viel Zeit vergangen, in der wir für Sie unermüdlich frische, moderne
          Trends und Inspirationen auskundschafteten. Zusammen mit unserer
          umfangreichen Ausstattung sowie unserem geschulten Team für alle
          Servicebereiche, ist unser Erfahrungsschatz in punkto Festlichkeiten
          und Events weiter gewachsen.
        </p>
        <Link to="/kontakt" className={styles.textbox__link}>
          mehr über uns
        </Link>
        <div className={styles.textbox__signature}> Alfred & Sabine Berger</div>
      </div>
      <div className={styles.textbox__img}>
        <TeamImg />
      </div>
    </div>
  )
}

export default TextBox
