import React from "react"
import styles from ".//Footer.module.scss"
import {Link} from "gatsby"


const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__copyright}> © Partyservice Berger 2021</p>
      <Link to="/impressum" className={styles.footer__link}>
        Impressum
      </Link>
      <Link to="/impressum" className={styles.footer__link1}>
        Datenschutz
      </Link>
    </div>
  )
}


export default Footer