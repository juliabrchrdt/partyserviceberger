import React from "react"
import Layout from "../components/01_Layout/Layout"
import { HeaderStart } from "../components/03_Header/Header"
import TextBox from "../components/04_TextBox/Textbox"
import SliderKulinarik from "../components/05_Slider/SliderKulinarik"
import SliderHochzeit from "../components/05_Slider/SliderHochzeit"


export default () => (
  <Layout>
    <HeaderStart />
    <TextBox />
    <SliderKulinarik link={"Erfahre mehr"}/>
    <SliderHochzeit />
  </Layout>
)
