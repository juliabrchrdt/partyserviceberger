import React, { useState } from "react"
import styles from "../05_Slider/Slider.module.scss"
import { Link } from "gatsby"
import arrowLeft from "../../images/arrow_left.svg"
import arrowRight from "../../images/arrow_right.svg"

const slides = [
  {
    id: 1,
    title: "Kulinarik",
    subtitle: "Ein Blick in unsere Küche",
    img: require("../../images/sliderKulinarik-1.jpg"),
    text: `Mit dem klaren Ziel Neues zu entdecken und unsere kulinarische Vielfalt zu erweitern, sind wir für Sie auf der ganzen Welt unterwegs.
Selbstverständlich haben wir unsere traditionellen Wurzeln in Bayern und auf dem Balkan nicht vergessen, welche das Fundament unserer Küche bilden.`,
  },
  {
    id: 2,
    title: "Kulinarik",
    subtitle: "Buffets aus aller Welt",
    img: require("../../images/sliderKulinarik-2.jpeg"),
    text: `Besonders unsere Balkanspezialitäten nach traditionellen Familienrezepturen bereichern unsere BBQ-Events und sind fester Bestandteil in unserem Portfolio.
Absolute Frische, Qualität und Regionalität stehen für uns an erster Stelle.`,
  },
  {
    id: 3,
    title: "Kulinarik",
    subtitle: "Highlights am Buffet",
    img: require("../../images/sliderKulinarik-3.jpeg"),
    text: `Fleischspezialitäten bilden nach wie vor den Zenit eines klassischen Buffets. Ob rosa gebratene Lende vom Kalb, gegrillte Haxe vom Lamm oder englisches Roastbeef - bei uns kommt alles unters Messer!`,
  },
]

const SliderKulinarik = props => {
  const [slide, setSlide] = useState(slides[0])
  const [counter, setCounter] = useState(2)

  const countUp = () => {
    if (counter < 3) {
      setCounter(prevCounter => prevCounter + 1)
    } else if (counter === 3) {
      setCounter(1)
    }
    console.log("Forth Button: " + counter)
  }

  const countDown = () => {
    if (counter > 1 && counter <= 3) {
      setCounter(prevCounter => prevCounter - 1)
    } else if (counter === 1) {
      setCounter(3)
    }
    console.log("Back Button: " + counter)
  }

  const changeContent = () => {
    if (counter === 1) {
      setSlide(slides[0])
    } else if (counter === 2) {
      setSlide(slides[1])
    } else if (counter === 3) {
      setSlide(slides[2])
    }
  }

  const handleRight = () => {
    countUp()
    changeContent()
  }
  const handleLeft = () => {
    countDown()
    changeContent()
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slider__number}>{"0" + slide.id}</div>
      <p className={styles.slider__title}>{slide.title}</p>
      <div className={styles.slider__text}>
        <p className={styles.slider__subtitle}> {slide.subtitle}</p>
        {slide.text}
        <Link to="/" className={styles.slider__link}>
          {props.link}
        </Link>
      </div>
      <img alt={"slider"} src={slide.img} className={styles.slider__img}></img>
      <img
        alt={"right"}
        src={arrowRight}
        className={styles.slider__btnRight}
        onClick={handleRight}
        onKeyPress={handleRight}
      ></img>
      <img
        alt={"left"}
        src={arrowLeft}
        className={styles.slider__btnLeft}
        onClick={handleLeft}
        onKeyPress={handleLeft}
      ></img>
    </div>
  )
}

export default SliderKulinarik
