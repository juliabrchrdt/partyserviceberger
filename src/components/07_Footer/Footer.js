import React from "react"
import styles from "../07_Footer/Footer.module.scss"
import {Link} from "gatsby"


const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__copyright}> © Partyservice Berger 2020 </p>
      <Link to="/" className={styles.footer__link}>
        Impressum
      </Link>
      <Link to="/"  className={styles.footer__link1}>
        Datenschutz
      </Link>
    </div>
  )
}


export default Footer