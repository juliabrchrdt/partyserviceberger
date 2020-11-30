import React from "react"
import ImageProvider from "./ImageProvider"

const Title = props => {
  const divStyle = {
    display: "grid",
    gridTemplateColumns: "100%",
    gridTemplateRows: "10vh 10vh 10vh",
    backgroundColor: "#f3eccf",
  }

  const titleStyle = {
    gridRow: "2/3",
    justifySelf: "center",
    alignSelf: "center",
    fontSize: "4vh",
    color: "#a3985d",
    textAlign: "center",
    fontFamily: "Poppins",
    marginTop: "3em",
  }

  return (
    <div style={divStyle}>
      <h1 style={titleStyle}>{props.title}</h1>
    </div>
  )
}

export default Title
