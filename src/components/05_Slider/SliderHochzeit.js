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
    img: require("../../images/sliderHochzeit-1.jpg"),
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
  },
  {
    id: 2,
    title: "Hochzeiten",
    subtitle: "Welche Rolle wir an Ihrer Hochzeit spielen",
    img: require("../../images/sliderHochzeit-2.jpg"),
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore..Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. `,
  },
  {
    id: 3,
    title: "Hochzeiten",
    subtitle: "Specials für Hochzeiten",
    img: require("../../images/sliderHochzeit-3.jpg"),
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet..`,
  },
]

const SliderKulinarik = (props) => {

  const [slide, setSlide] = useState(slides[0])
  const [counter, setCounter] = useState(1)
  const ids = slides.map(slides => slides.id)

  const countUp = () => {
    if (counter < 3) {
      setCounter(prevCounter=>prevCounter + 1)
    } else if (counter === 3) {
      setCounter(1)
    }
    console.log('Forth Button: ' + counter)
  }

  const countDown = () => {
    if (counter > 1 && counter <= 3) {
      setCounter(prevCounter=>prevCounter - 1)
    } else if ( counter === 1) {
      setCounter(3)
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
    <div className={styles.sliderWhite}>
      <div className={styles.sliderWhite__number}>{'0'+slide.id}</div>
      <p className={styles.sliderWhite__title}>{slide.title}</p>
      <div className={styles.sliderWhite__text}>
        <h2> {slide.subtitle}</h2>
        {slide.text}
        <Link to="/" className={styles.sliderWhite__link}>
          {props.link}
        </Link>
      </div>
      <img src={slide.img} className={styles.sliderWhite__img}></img>



      <img src={arrowRight} className={styles.sliderWhite__btnRight} onClick={handleRight}></img>
      <img src={arrowLeft} className={styles.sliderWhite__btnLeft} onClick={handleLeft}></img>
    </div>
  )
}

export default SliderKulinarik