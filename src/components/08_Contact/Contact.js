import React from "react"
import styles from "./Contact.module.scss"
import { RiCustomerServiceLine, RiMailLine, RiCommunityLine} from "react-icons/ri";


export const Contact= props => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__mail}>

          <RiMailLine size={32} color="#a3985d"/>


        <p className={styles.contact__text}>info@berger.de</p>
      </div>
      <div className={styles.contact__phone}>
        <RiCustomerServiceLine size={32} color="#a3985d"/>
        <p className={styles.contact__text}>	09906 / 9 09 00 20 </p>
        <p className={styles.contact__text}>  Mo. - Fr. von 7:30 - 13 Uhr</p>
        <p className={styles.contact__text}>  Besprechung nach Vereinbarung</p>
      </div>
      <div className={styles.contact__adress}>
        <RiCommunityLine size={32} color="#a3985d"/>
        <p className={styles.contact__text}>	Kirchenweg 22 </p>
        <p className={styles.contact__text}>	94553 Mariaposching </p>

      </div>
    </div>
  )
}
