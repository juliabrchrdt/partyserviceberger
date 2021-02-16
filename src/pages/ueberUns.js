import React from "react"
import Layout from "../components/01_Layout/Layout"
import { Header} from "../components/03_Header/Header"
import { Contact } from "../components/07_Contact/Contact"
import TextBox from "../components/04_TextBox/Textbox"
import { Helmet } from "react-helmet"


const UeberUns = () => {
  return (
    <Layout>
      <Helmet>
        <title>Partyservie Berger - Ueber uns</title>
        <meta name="Partyservice und Catering im Umkreis Straubing" content="Startseite Partyservice Berger Straubing, Buffets aus aller Welt, Kulinarik, Hochzeiten" />
      </Helmet>
     <Header title={"Über uns"} filename={"teamBerger-6.jpg"} styling={{height: "100%"}}/>

      <TextBox
        title={"Eine Familientradition"}
        text={`Seit mehr als 30 Jahren haben wir es uns zur Aufgabe gemacht, unsere Kunden bei ihren Festlichkeiten kulinarisch zu verwöhnen.
Seitdem ist viel Zeit vergangen, in der wir für Sie unermüdlich frische, moderne Trends und Inspirationen auskundschafteten. Zusammen mit unserer umfangreichen Ausstattung sowie unserem geschulten Team für alle Servicebereiche, ist unser Erfahrungsschatz in punkto Festlichkeiten und Events weiter gewachsen.  `}
        alt={"Unser Team"}
        filename={"teamBerger-2.jpg"}/>



      <Contact/>
    </Layout>
  )
}

export default UeberUns
