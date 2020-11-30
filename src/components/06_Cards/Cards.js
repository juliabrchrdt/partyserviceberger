import React from "react"
import styles from "./Cards.module.scss"
import ImageProvider from "../00_Lib/ImageProvider"
import { Link } from "gatsby"

export const Cards = props => {
  return (
    <div className={styles.cards}>
      <div className={styles.cards__content}>
        <h1 className={styles.cards__title}>{props.title}</h1>
        <p className={styles.cards__text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>

        <div className={styles.cards__card1}>
          <h2 className={styles.cards__subtitle}>{props.sub1}</h2>
          <Link to="/">
            <ImageProvider
              alt={"location"}
              filename={"location1.jpg"}
              styling={{ height: "100%" }}
            />
          </Link>
        </div>

        <div className={styles.cards__card2}>
          <h2 className={styles.cards__subtitle}>{props.sub2}</h2>
          <Link to="/">
            <ImageProvider
              alt={"location"}
              filename={"location2.jpg"}
              styling={{ height: "100%", backfaceVisibility: "hidden" }}
            ></ImageProvider>
          </Link>
        </div>

        <div className={styles.cards__card3}>
          <h2 className={styles.cards__subtitle}>{props.sub3}</h2>
          <Link to="/">
            <ImageProvider
              alt={"location"}
              filename={"location3.jpg"}
              styling={{ height: "100%" }}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
