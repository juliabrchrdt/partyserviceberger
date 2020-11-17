import React, { useState } from "react"
import styles from "../05_Slider/Slider.module.scss"
import { Link } from "gatsby"
import arrowLeft from "../../images/arrow_left.svg"
import arrowRight from "../../images/arrow_right.svg"

const slides = [
  {
    id: 1,
    title: "Hochzeiten",
    subtitle: "Der schönste Tag Ihres Lebens",
    img: require("../../images/sliderKulinarik-2.jpg"),
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore...`,
  },
  {
    id: 2,
    title: "Wir planen für Sie",
    subtitle: "Buffets aus aller Welt",
    img: require("../../images/sliderKulinarik-6.jpeg"),
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore... `,
  },
  {
    id: 3,
    title: "Unsere Hochzeitsspecials",
    subtitle: "Highlights am Buffet",
    img: require("../../images/sliderKulinarik-3.jpeg"),
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore ...`,
  },
]

const Slider = (props) => {

  const [slide, setSlide] = useState(slides[0])
  const [counter, setCounter] = useState(1)
  const ids = slides.map(slides => slides.id)

  const countUp = () => {
    if (counter < 3) {
      setCounter((prevCounter)=>prevCounter + 1)
    } else if (counter === 3) {
      setCounter((prevCounter)=>prevCounter(1))
    }
    console.log('Forth Button: ' + counter)
  }

  const countDown = () => {
    if (counter > 1 && counter <= 3) {
      setCounter((prevCounter)=>prevCounter - 1)
    } else if ( counter === 1) {
      setCounter((prevCounter)=>prevCounter(3))
    }
    console.log('Back Button: ' + counter)

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
      <div className={styles.slider__number}>{slide.id}</div>
      <p className={styles.slider__title}>{slide.title}</p>
      <div className={styles.slider__text}>
        <h2> {slide.subtitle}</h2>
        {slide.text}
        <Link to="/" className={styles.slider__link}>
          {props.link}
        </Link>
      </div>
      <img src={slide.img} className={styles.slider__img}></img>
      <img src={arrowRight} className={styles.slider__btnRight} onClick {handleRight}></img>
      <img src={arrowLeft} className={styles.slider__btnLeft} onClick={handleLeft}></img>
    </div>
  )
}

export default Slider