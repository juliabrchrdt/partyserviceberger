import React from "react"
import Layout from "../components/01_Layout/Layout"
import { Header } from "../components/03_Header/Header"
import TextBox from "../components/04_TextBox/Textbox"
import SliderKulinarik from "../components/05_Slider/SliderKulinarik"
import SliderHochzeit from "../components/05_Slider/SliderHochzeit"
import { Cards } from "../components/06_Cards/Cards"
import { Contact } from "../components/07_Contact/Contact"

export default () => (
  <Layout>
    <Header alt={"header"} filename={"header.jpg"} fileLogo={"logo.png"} />
    <TextBox />
    <SliderKulinarik link={" Erfahre mehr"} />
    <SliderHochzeit link={" Erfahre mehr"} />
    <Cards
      title={"Locations"}
      sub1={"Gut Haagn"}
      sub2={"Schloss Egg"}
      sub3={"Teisnach"}
    />
    <Contact />
  </Layout>
)

//
//
