import React, { useState } from "react"
import {Link} from "gatsby"
import styles from "./Navbar.module.scss"


const Navbar = () => {
  const clicked = useState(false);
  return (

      <nav>
        <div className={styles.nav_logo}>logo</div>
        <div className={styles.nav_button} onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
        </div>

          <ul className={styles.nav_items}>
            <li><Link className={styles.nav_link} to="/">Kulinarik</Link></li>
            <li><Link className={styles.nav_link} to="/wedding/">Hochzeiten</Link></li>
            <li><Link className={styles.nav_link} to="/">Ausstattung</Link></li>
            <li><Link className={styles.nav_link} to="/">Kontakt</Link></li>
          </ul>

      </nav>
  )
}

export default Navbar