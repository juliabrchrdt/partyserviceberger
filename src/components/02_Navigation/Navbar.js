import React, { useState } from "react"
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import styles from "./Navbar.module.scss"
import {NavbarItems} from "./NavbarItems"
import {Dropdown} from ".Dropdown"
import { Button } from "./Button"


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

const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState (false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);


  return (

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
        <Button />
      </nav>
  )
}

export default Navbar
