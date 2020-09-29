import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styles from "./Images.module.scss"

const getImages = graphql`
  {
    headerImg: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoImg: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kulinarikImg: file(relativePath: { eq: "kulinarik.jpg" }) {
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
  }
`

export const StartImg = () => {
  const data = useStaticQuery(getImages)

  return (
    <div className={styles.img_start}>
      <Image fluid={data.headerImg.childImageSharp.fluid} />
    </div>
  )
}

export const LogoImg = () => {
  const data = useStaticQuery(getImages)

  return (
    <div className={styles.img_logo}>
      <Image fluid={data.logoImg.childImageSharp.fluid} />
    </div>
  )
}

export const KulinarikImg = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <div className={styles.img_kulinarik}>
      <Image fluid={data.kulinarikImg.childImageSharp.fluid} />
    </div>
  )
}

export const LogoKleinImg = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <div className={styles.img_logo_klein}>
      <Image fluid={data.logoKleinImg.childImageSharp.fluid} />
    </div>
  )
}
