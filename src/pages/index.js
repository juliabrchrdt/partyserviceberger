import React from "react"
import Layout from "../components/01_Layout/Layout"
import Slider from "../components/05_Slider/Slider"
import { HeaderStart } from "../components/03_Header/Header"
import TextBox from "../components/04_TextBox/Textbox"

export default () => (
  <Layout>
    <HeaderStart />
    <TextBox />
    <Slider />
  </Layout>
)
