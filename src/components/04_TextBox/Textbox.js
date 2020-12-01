import React from "react"
import { Link } from "gatsby"
import styles from "../04_TextBox/Textbox.module.scss"
import data from "./TextboxData"
import ImageProvider from "../00_Lib/ImageProvider"

const TextBox = (props) => {
  return (

      <div className={styles.textbox} style={props.style}>
        <h1 className={styles.textbox__title}>{props.title}</h1>
            <div className={styles.textbox__content}>

              <p className={styles.textbox__text}>{props.text}</p>
              <Link to={props.internLink} >

                <a href={props.externLink} className={styles.textbox__link}>{props.linkName}</a>
              </Link>
              <div className={styles.textbox__signature}>
                {props.signature}
              </div>
            </div>
        <div className={styles.textbox__img}>
          <ImageProvider alt={props.alt} filename={props.filename}  />
        </div>
      </div>
  )
}

export default TextBox
