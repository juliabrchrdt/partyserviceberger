import React from "react"
import {Link} from "gatsby"
import styles from "./Navbar.module.scss"

const Navbar = () => {
  return (


      <nav>

        <div className={styles.nav_logo}><a href="/">BERGER</a></div>
        <div>
          <ul className={styles.nav_items}>
            <li><Link className={styles.nav_link} to="/">Kulinarik</Link></li>
            <li><Link className={styles.nav_link} to="/wedding/">Hochzeiten</Link></li>
            <li><Link className={styles.nav_link} to="/">Ausstattung</Link></li>
            <li><Link className={styles.nav_link} to="/">Kontakt</Link></li>
          </ul>
        </div>
      </nav>

  )
}

export default Navbar