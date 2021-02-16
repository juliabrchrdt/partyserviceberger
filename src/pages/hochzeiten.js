import React from "react"
import Layout from "../components/01_Layout/Layout"
import { Header } from "../components/03_Header/Header"
import TextBox from "../components/04_TextBox/Textbox"
import { Helmet } from "react-helmet"

const Hochzeiten = () => {
  return (
    <Layout>
      <Helmet>
        <title>Partyservie Berger - Startseite</title>
        <meta name="Partyservice und Catering im Umkreis Straubing" content="Startseite Partyservice Berger Straubing, Buffets aus aller Welt, Kulinarik, Hochzeiten" />
      </Helmet>
      <Header alt={"header"}  filename={"hochzeit-3.jpg"} title={"Hochzeiten"} styling={{height: "100%"}}/>
      <TextBox
        title={"Der schönste Tag Ihres Lebens"}
        text={`Nach über 30 Ehejahren blicken wir noch immer gerne auf unseren eigenen Hochzeitstag zurück, der uns daran erinnert, wie unvergesslich ein einzelner Tag sein kann. Deshalb legen wir alles daran, gerade diesen Tag für Sie zu einem einzigartigen Erlebnis werden zu lassen. In den langen Jahren, in denen wir die unterschiedlichsten Brautpaare beraten durften, konnten wir viele Erfahrungen sammeln, die wir gerne an Sie weitergeben.`}
        alt={"Blick in die Küche. "}
        filename={"hochzeit-2.jpg"}
      />

      <TextBox
        title={"Welche Rolle wir an Ihrer Hochzeit spielen"}
        text={`Dabei ist jede Hochzeit für sich einzigartig und perfekt auf das Brautpaar zugeschnitten, denn jedes Paar hat seine eigenen Träume, die wir versuchen, zu erfüllen. Je nach Ihren Wünschen und Vorstellungen übernehmen wir gerne die Planung Ihres Hochzeitstages bis hin zum Hochzeitsauto. Oder aber wir halten uns im Hintergrund und kümmern uns voll und ganz um die kulinarischen Aspekte Ihres Tages. Wir nehmen uns gerne Zeit für ein persönliches Gespräch in unserem sonnendurchfluteten Wintergarten und laden Sie ein, bei einem Glas Prosecco, den schönsten Tag Ihres Lebens mit uns zu gestalten.`}
        alt={"Blick in die Küche. "}
        filename={"hochzeit-1.jpg"}
      />

    </Layout>
  )
}

export default Hochzeiten
