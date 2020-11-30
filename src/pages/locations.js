import React from "react"
import Layout from "../components/01_Layout/Layout"
import { Header } from "../components/03_Header/Header"
import TextBox from "../components/04_TextBox/Textbox"


const Locations = () => {
  return (
    <Layout>
      <Header  title={"Unsere Partnerlocations"} filename={"locations.jpg"} styling={{height: "111%"}} alt={"locations"}/>

      <TextBox
        title={"Schloss Steinach"}
        text={`Die außergewöhnliche Lokalität bietet den perfekten Rahmen für jede Veranstaltung: ob Geburtstage, Hochzeiten, Brautstehlen, Betriebsfesten, Vereinsfeste, Konzerte oder Weihnachtsfeiern - die Schlossgaststätte hat die geeigneten Räumlichkeiten, mit besonderem Flair, dafür! Gerne plant Patric Biermann mit den Gastgebern die gesamte Veranstaltung und kümmert sich um den reibungslosen Ablauf der Veranstaltung. Selbst die Schlosskapelle, zum Heiligen Georg, kann für Hochzeiten genutzt werden.   `}
        linkName={"mehr über Schloss Steinach"}
        externLink={"http://www.schlossgasthof-steinach.de/"}
        alt={"Schloss Steinach"}
        filename={"schlossSteinach.jpg"}/>
      <TextBox
        title={"Schloss Offenberg"}
        text={`Schloss Offenberg ist eine Burganlage , deren Außentürme und Ringmauern aus dem Mittelalter stammen. Ursprünglich war sie Ministerialburg der Grafen von Bogen. Im 18. Jahrhundert entstand durch die Familie der Grafen zu Montfort die jetzige barockisierte Dreiflügelanlage mit zwei ehemaligen Zugbrücken und Gräben.  `}
        linkName={"mehr über Schloss Offenberg"}
        externLink={"https://www.schloss-offenberg.de/"}
        alt={"Schloss Offenberg"}
        filename={"schlossOffenberg.jpg"}
      />

      <TextBox
        title={"Gut Haggn"}
        text={`In einer bachdruchflossenen Talmulde am Fuße des Buchaberges liegt von Bäumen umschlossen das malerische und märchenhafte Schloss Haggn. Ob Hochzeiten, Ausstellungen, Vernissagen, Geburtstage, Theater oder Musicals unser Marstall bietet den richten Rahmen für diese Vielfalt an Feierlichkeiten. 
          Lassen Sie sich an Tagen des Feierns und der Feste von unserer Gastlichkeit verzaubern.   `}
        linkName={"mehr über Gut Haggn"}
        externLink={"http://leopolds-neukirchen.de/"}
        alt={"Gut Haggn"}
        filename={"gutHaggn.jpg"}/>


    </Layout>
  )
}

export default Locations
