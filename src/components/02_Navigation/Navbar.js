import React, { useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import styles from "./Navbar.module.scss"
import { Dropdown } from "./Dropdown"
import { LogoKleinImg } from "../00_Lib/Images"
import { DropdownKulinarik } from "./DropdownItems"

const Navbar = () => {
  /**const clicked = useState(false);

const handleClick = () => {
  this.setState({clicked: !this.clicked})
  <FontAwesomeIcon icon={faBars}/>


};
 <li><Link className={styles.nav_link} to="/">Kulinarik</Link></li>
 <li><Link className={styles.nav_link} to="/wedding/">Hochzeiten</Link></li>
 <li><Link className={styles.nav_link} to="/">Ausstattung</Link></li>
 <li><Link className={styles.nav_link} to="/">Kontakt</Link></li>

 **/

  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <div className={styles.nav_container}>
      <nav>
        <div className={styles.nav_logo} onClick={closeMobileMenu}>
          <LogoKleinImg />
        </div>

        <div className={styles.nav_mobile_icon} onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>

        <ul className={click ? styles.nav_items_active : styles.nav_items}>
          <li>
            <Link to="/kulinarik" className={styles.nav_link}>
              Kulinarik
            </Link>
          </li>
          <li>
            <Link to="/hochzeiten" className={styles.nav_link}>
              Hochzeiten
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.nav_link}>
              Ausstattung
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.nav_link}>
              Locations
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.nav_link}>
              {" "}
              Über uns
            </Link>
          </li>
        </ul>
        <button className={styles.btn}>Kontakt</button>
      </nav>
    </div>
  )
}

export default Navbar
