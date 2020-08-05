import React from "react"
import {Link} from "gatsby"

const Navbar = () => {
  return (
    <nav> This is the Nav Component
      <ul>
        <li><Link to="/">Start</Link></li>
        <li><Link to="/wedding/">Hochzeiten</Link></li>
        <li><Link to="/about/">Kontakt</Link></li>

      </ul>
    </nav>
  )
}

export default Navbar