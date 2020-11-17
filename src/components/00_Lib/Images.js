import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styles from "./Images.module.scss"

//Query Images
const getImages = graphql`
  {
   
    logoImg: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    logoKleinImg: file(relativePath: { eq: "logo_fisch.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
      
      headerImg: file(relativePath: { eq: "header.jpg" }) {
          childImageSharp {
              fluid(quality: 80) {
                  ...GatsbyImageSharpFluid
              }
          }
      }
    kulinarikImg: file(relativePath: { eq: "kulinarik.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    ausstattungImg: file(relativePath: { eq: "ausstattung.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    hochzeitenImg: file(relativePath: { eq: "hochzeiten.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    teamImg: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    locationsImg: file(relativePath: { eq: "locations.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    sliderKulinarik01Img: file(relativePath: { eq: "sliderKulinarik01.jpg" }) {
      childImageSharp {
        fixed (width:700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

//Logo Images
export const LogoImg = () => {
  const data = useStaticQuery(getImages)

  return (
    <div className={styles.img__logo}>
      <Image fluid={data.logoImg.childImageSharp.fluid} />
    </div>
  )
}

export const LogoKleinImg = () => {
  const data = useStaticQuery(getImages)

  return (
    <div className={styles.img__logo__klein}>
      <Image fluid={data.logoKleinImg.childImageSharp.fluid} />
    </div>
  )
}

//Header Images
export const StartImg = () => {
  const data = useStaticQuery(getImages)

  return (
    <div className={styles.img__position}>
      <Image fluid={data.headerImg.childImageSharp.fluid} />
    </div>
  )
}

export const KulinarikImg = () => {
  const data = useStaticQuery(getImages)


  return (
    <div className={styles.img__position}>
      <Image fluid={data.kulinarikImg.childImageSharp.fluid} />
    </div>
  )
}

export const AusstattungImg = () => {
  const data = useStaticQuery(getImages)


  return (
    <div className={styles.img__position}>
      <Image fluid={data.ausstattungImg.childImageSharp.fluid} />
    </div>
  )
}

export const HochzeitenImg = () => {
  const data = useStaticQuery(getImages)


  return (
    <div className={styles.img__position}>
      <Image fluid={data.hochzeitenImg.childImageSharp.fluid} />
    </div>
  )
}

export const LocationsImg = () => {
  const data = useStaticQuery(getImages)


  return (
    <div className={styles.img__position}>
      <Image fluid={data.locationsImg.childImageSharp.fluid} />
    </div>
  )
}

export const UeberUnsImg = () => {
  const data = useStaticQuery(getImages)


  return (
    <div className={styles.img__position}>
      <Image fluid={data.teamImg.childImageSharp.fluid} />
    </div>
  )
}

// Page Images
export const TeamImg = () => {
  const data = useStaticQuery(getImages)


  return <Image fluid={data.teamImg.childImageSharp.fluid} />
}

//SliderKulinarik Images

export const SliderKulinarik01Img = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <div className={styles.img__slider}>
      <Image fixed={data.sliderKulinarik01Img.childImageSharp.fixed} />
    </div>
  )
}
