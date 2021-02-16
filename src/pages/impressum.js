import React from "react"
import Layout from "../components/01_Layout/Layout"
import ImpressumContent from "../components/08_Footer/ImpressumContent"
import { Helmet } from "react-helmet"



export default () => (
  <Layout>
    <Helmet>
      <title>Partyservie Berger - Impressum</title>
      <meta name="Partyservice und Catering im Umkreis Straubing" content="Startseite Partyservice Berger Straubing, Buffets aus aller Welt, Kulinarik, Hochzeiten" />
    </Helmet>
<ImpressumContent/>
  </Layout>
)
