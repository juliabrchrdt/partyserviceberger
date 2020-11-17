import React, { useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import styles from "./Navbar.module.scss"
import { Dropdown } from "./Dropdown"
import { LogoKleinImg } from "../00_Lib/Images"
import { DropdownKulinarik } from "./DropdownItems"

const Navbar = () => {
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
    }
  }

  return (
    <div className={styles.nav}>
      <nav>
        <Link to="/" className={styles.nav__logo} onClick={closeMobileMenu}>
          <LogoKleinImg />
        </Link>

        <div className={styles.nav__icon} onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>

        <ul className={click ? styles.nav__items__active : styles.nav__items}>
          <li>
            <Link to="/kulinarik" className={styles.nav__link} activeClassName={styles.nav__active}>
              Kulinarik
            </Link>
          </li>
          <li>
            <Link to="/hochzeiten" className={styles.nav__link}  activeClassName={styles.nav__active}>
              Hochzeiten
            </Link>
          </li>
          <li>
            <Link to="/ausstattung" className={styles.nav__link}  activeClassName={styles.nav__active}>
              Ausstattung
            </Link>
          </li>
          <li>
            <Link to="/locations" className={styles.nav__link} activeClassName={styles.nav__active}>
              Locations
            </Link>
          </li>
          <li>
            <Link to="/ueberUns" className={styles.nav__link}  activeClassName={styles.nav__active}>
              Über uns
            </Link>
          </li>
        </ul>
        <button className={styles.nav__btn}>Kontakt</button>
      </nav>
    </div>
  )
}

export default Navbar
