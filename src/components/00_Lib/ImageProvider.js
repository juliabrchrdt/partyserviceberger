import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


export default (props) => {

  const { filename, alt } = props;
  const images = useStaticQuery(graphql`
      query ImageQuery {
          data: allFile {
              edges {
                  node {
                      relativePath
                       childImageSharp {
                          fluid(quality: 65) {
                              ...GatsbyImageSharpFluid_withWebp
                          }
                      }
                  }
              }
          }
      }
  `);

  const image = images.data.edges.find(n => {
    return n.node.relativePath.includes(filename);
  });


  if (!image) {
    return null;
  }

  return (
    <Img style={props.styling}  alt={alt} fluid={image.node.childImageSharp.fluid
    } />
  )
}