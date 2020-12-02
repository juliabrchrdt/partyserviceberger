import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


export default (props) => {

  const { filename, type = 'default', alt, sizes = 'default' } = props;
  const images = useStaticQuery(graphql`
      query ImageQuery {
          data: allFile {
              edges {
                  node {
                      relativePath
                      default: childImageSharp {
                          fluid(quality: 80) {
                              ...GatsbyImageSharpFluid
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
    <Img style={props.styling}  alt={alt} fluid={{
      ...image.node[type].fluid,
      sizes: sizes,
    }} />
  )
}
