import styles from "./Navbar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { NavbarItems } from "./NavbarItems"
import { Link } from "gatsby"
import { Dropdown } from "./Dropdown"
import React from "react"

<nav>
<div className={styles.nav_logo}>logo</div>

<div className={styles.nav_mobile_icon} onClick={handleClick}>
  <FontAwesomeIcon icon = {click ? faTimes : faBars}/>
</div>

<ul className={click ? 'nav_items active' : styles.nav_items}>
  {NavbarItems.map((item, index)=> {
    return (

      <li key={index}>
        <Link to={item.url} className={item.cName} onClick={closeMobileMenu}>
          {item.title}
        </Link>
        {dropdown && <Dropdown />
        }
      </li>

    )})}
</ul>
<button className={styles.btn}>Kontakt</button>
</nav>