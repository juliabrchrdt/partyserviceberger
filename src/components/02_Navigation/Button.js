import React from "react"
import "Button.module.scss";
import {Link} from "gatsby"

export function Button() {
  return (
    <Link to={'#'}>
      <button className={'btn'}>Kontakt</button>
    </Link>
  );



}