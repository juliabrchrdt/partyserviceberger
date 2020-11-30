import React, { useState } from "react"
import { Link } from "gatsby"
import { DropdownKulinarik } from "./DropdownItems"
import styles from "./Dropdown.module.scss"

export const Dropdown = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown_menu_clicked" : "dropdown_menu"}
      >
        {DropdownKulinarik.map((item, i) => {
          return (
            <li key={i}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
