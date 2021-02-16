import React from "react"
import Layout from "../components/01_Layout/Layout"
import { Header } from "../components/03_Header/Header"
import TextBox from "../components/04_TextBox/Textbox"
import { Helmet } from "react-helmet"


export default () => (
  <Layout>
    <Helmet>
      <title>Partyservie Berger - Kulinarik</title>
      <meta name="Partyservice und Catering im Umkreis Straubing" content="Startseite Partyservice Berger Straubing, Buffets aus aller Welt, Kulinarik, Hochzeiten" />
    </Helmet>
    <Header filename={"kulinarik.jpg"} title={"Kulinarische Köstlichkeiten"} styling={{height: "100%"}}/>

    <TextBox
      title={"Ein Blick in unsere Küche"}
      text={`Mit dem klaren Ziel Neues zu entdecken und unsere kulinarische Vielfalt zu erweitern, sind wir für Sie auf der ganzen Welt unterwegs.
Selbstverständlich haben wir unsere traditionellen Wurzeln in Bayern und auf dem Balkan nicht vergessen, welche das Fundament unserer Küche bilden. Besonders unsere Balkanspezialitäten nach traditionellen Familienrezepturen bereichern unsere BBQ-Events und sind fester Bestandteil in unserem Portfolio. `}
      alt={"Blick in die Küche. "}
      filename={"team.jpg"}
    />



  </Layout>
)
