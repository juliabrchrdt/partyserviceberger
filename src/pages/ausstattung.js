import React from "react"
import Layout from "../components/01_Layout/Layout"
import { Header} from "../components/03_Header/Header"
import TextBox from "../components/04_TextBox/Textbox"
import { Helmet } from "react-helmet"

export default () => (
  <Layout>
    <Helmet>
      <title>Partyservie Berger - Ausstattung</title>
      <meta name="Partyservice und Catering im Umkreis Straubing" content="Startseite Partyservice Berger Straubing, Buffets aus aller Welt, Kulinarik, Hochzeiten" />
    </Helmet>
    <Header alt={"header"}  filename={"ausstattung.jpg"} title={"Ausstattung & Specials"}  styling={{height: "100%"}}/>
    <TextBox
      title={"Cigar Voyager Bar"}
      text={`Eine Zigarre bildet zusammen mit dem passenden Drink ein Sinnbild von Luxus und Genuss – somit wird sie mit besonderen Anlässen in Verbindung gebracht.

Deshalb präsentieren wir Ihnen unsere Alfred & Son Cigar-Bar. Das Ensemble, bestehend aus aufwendig restaurierten Überseekoffern aus den 20er Jahren, lässt Raum für bis zu zwanzig erlesenen Bränden, welche von uns korrespondierend zu den Zigarren ausgewählt werden. Die klassische Kombination von Zigarren und diversen Whiskys ist die Basis der Digestif-Bar und wird durch weitere fassgelagerte Brände abgerundet. Das Herzstück der Cigar-Bar charakterisiert der massive Zigarrentisch mit einem gepflegten Humidor.`}
      alt={"Blick in die Küche. "}
      filename={"cigarbar.jpg"}
    />


  </Layout>
)
