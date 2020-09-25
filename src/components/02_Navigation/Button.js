import React from "react"
import styles from "./Button.module.scss"
import {Link} from "gatsby"

export function Button() {
  return (
    <Link to={'#'}>
      <button className={styles.btn}>Kontakt</button>
    </Link>
  );
}


