import React, { useState } from "react"
import styles from "../05_Slider/Slider.module.scss"
import { Link } from "gatsby"
import arrowLeft from "../../images/arrow_left.svg"
import arrowRight from "../../images/arrow_right.svg"

const slides = [
  {
    id: 1,
    title: "Hochzeiten",
    subtitle: "Ihr schönster Tag",
    img: require("../../images/sliderHochzeit-1.jpg"),
    text: `Nach über 30 Ehejahren blicken wir noch immer gerne auf unseren eigenen Hochzeitstag zurück, der uns daran erinnert, wie unvergesslich ein einzelener Tag sein kann.  `,
  },
  {
    id: 2,
    title: "Hochzeiten",
    subtitle: "Welche Rolle wir an Ihrer Hochzeit spielen",
    img: require("../../images/sliderHochzeit-2.jpg"),
    text: `Je nach Ihren Wünschen und Vorstellungen übernehmen wir gerne die Planung Ihres Hochzeitstages bis hin zum Hochzeitsauto. Oder aber wir halten uns im Hintergrund und kümmern uns voll und ganz um die kulinarischen Aspekte Ihres Tages. `,
  },
  {
    id: 3,
    title: "Hochzeiten",
    subtitle: "Specials für Hochzeiten",
    img: require("../../images/sliderHochzeit-3.jpg"),
    text: `Wir arrangieren für Sie gerne einen stilvollen Steh- und Sektempfang an verschiedenen Locations Ihrer Wahl. Unser engagiertes Serviceteam verwöhnt Sie mit vielerlei Canapés oder einem abwechslungsreichen Flying Buffet. Unsere hauseigenen, spritzigen Aperitif-Kreationen runden den klassischen Sektempfang ab..`,
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
    <div className={styles.sliderWhite__box}>
    <div className={styles.sliderWhite}>
      <div className={styles.sliderWhite__number}>{"0" + slide.id}</div>
      <p className={styles.sliderWhite__title}>{slide.title}</p>
      <div className={styles.sliderWhite__text}>
        <h2 className={styles.sliderWhite__subtitle}> {slide.subtitle}</h2>
        {slide.text}
        <Link to="/" className={styles.sliderWhite__link}>
          {props.link}
        </Link>
      </div>
      <img src={slide.img} className={styles.sliderWhite__img}></img>

      <img
        src={arrowRight}
        className={styles.sliderWhite__btnRight}
        onClick={handleRight}
        onKeyPress={handleRight}
      ></img>
      <img
        src={arrowLeft}
        className={styles.sliderWhite__btnLeft}
        onClick={handleLeft}
        onKeyPress={handleLeft}
      ></img>
    </div>
    </div>
  )
}

export default SliderKulinarik
