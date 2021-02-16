import React, { useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import styles from "./Navbar.module.scss"
import ImageProvider from "../00_Lib/ImageProvider"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <div className={styles.nav}>
      <nav>
        <Link to="/" className={styles.nav__logo} onClick={closeMobileMenu}>
          <ImageProvider
            styling={{ width: "2.5em" }}
            alt={"logo"}
            filename={"logo_fisch.png"}
          />
        </Link>

        <div className={styles.nav__icon} onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>

        <ul className={click ? styles.nav__items__active : styles.nav__items}>
          <li>
            <Link
              to="/kulinarik"
              className={styles.nav__link}
              activeClassName={styles.nav__active}>
              Kulinarik
            </Link>
          </li>
          <li>
            <Link
              to="/hochzeiten"
              className={styles.nav__link}
              activeClassName={styles.nav__active}>
              Hochzeiten
            </Link>
          </li>
          <li>
            <Link
              to="/ausstattung"
              className={styles.nav__link}
              activeClassName={styles.nav__active}
            >
              Ausstattung
            </Link>
          </li>
          <li>
            <Link
              to="/locations"
              className={styles.nav__link}
              activeClassName={styles.nav__active}
            >
              Locations
            </Link>
          </li>
          <li>
            <Link
              to="/ueberUns"
              className={styles.nav__link}
              activeClassName={styles.nav__active}
            >
              Über uns
            </Link>
          </li>
        </ul>

        <button className={styles.nav__btn}>
          <a href="/ueberUns">Kontakt </a>
        </button>
      </nav>
    </div>
  )
}

export default Navbar
