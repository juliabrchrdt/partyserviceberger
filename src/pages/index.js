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
    <Header
      alt={"header"}
      filename={"header.jpg"}
      fileLogo={"logo.png"}
      styling={{ height: "100%" }}
    />
    <TextBox
      title={"Genießen Sie das Besondere"}
      text={`Nach diesem Motto verwöhnen wir unsere Kunden nun schon seit vielen Jahren. 
      Der Erfolg spricht für uns. Wir arbeiten stets daran, unser Angebot für Sie zu erweitern, sind immer auf der Suche nach neuen Rezepten. 
      Genießen Sie Ihr Fest und lassen Sie sich von uns verwöhnen - wir beraten Sie gerne!  `}
      linkName={"Mehr über uns"}
      internLink={"/ueberUns"}
      signature={"Alfred & Sabine Berger"}
      alt={"Alfred und Sabine Berger"}
      filename={"teamBerger.jpg"}
    />
    <SliderKulinarik link={" Erfahre mehr"} />
    <SliderHochzeit link={" Erfahre mehr"} />
    <Cards
      title={"Locations"}
      text={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.`}
      sub1={"Schloss Offenberg"}
      sub2={"Schloss Steinach"}
      sub3={"Gut Haggn"}
    />
    <Contact />
  </Layout>
)

//
//
