import React from "react"

const ImpressumContent = () => {
  const divStyle = {
    color: "black",
    fontFamily: "Poppins",
    margin: "2em"
    
  }

  const headerStyle ={
    color: "gold",
    textAlign: "center",
    marginTop: "2em",
    marginBottom: "0.5em"
  }
  return (

    <div style={divStyle}>
      <h1 style={headerStyle}>Impressum & Datenschutz</h1>
      <section>
        Den Schutz Ihrer Daten nehmen wir (i.F. Verantwortlicher,
        Websitebetreiber, Website, Online-Auftritt) sehr ernst. Bei Ihrem Besuch
        unserer Angebote möchten wir sicherstellen, dass Ihre Privatsphäre
        jederzeit geschützt wird. Nachfolgend erläutern wir Ihnen, welche Art
        von Daten wir von Ihnen sammeln und wie wir damit umgehen.
      </section>
      <section>
        <h2 style={headerStyle}> Verantwortlicher</h2>
        Partyservice Berger Inh. Alfred Berger Kirchenweg 22 , 94553
        Mariaposching Deutschland Kontakt
      </section>
      <section>
        <h2 style={headerStyle}>Datenschutzbeauftragter</h2>
        berger-mariaposching@t-online.de Daten ohne Personenbezug Um unseren
        Online-Auftritt zu besuchen, müssen Sie keine Daten angeben. Wir
        speichern lediglich anonymisierte Zugriffsdaten ohne Personenbezug, wie
        z.B. Namen Ihres Internetserviceproviders den Namen der angeforderten
        Datei die Seite von der aus Sie uns besuchen ihre IP Datum und der
        Uhrzeit der Anforderung der eingesetzte Internet Browser. Zur
        Datenerhebung werden dabei Cookies eingesetzt, die allerdings ebenfalls
        die Daten ausschließlich in anonymer oder pseudonymer Form erheben und
        speichern und keinen Rückschluss auf Ihre Person erlauben. Diese Daten
        werden von uns nicht an Dritte weiter gegeben und dienen ausschließlich
        zur internen statistischen Auswertung. Eine Verbindung dieser anonymen
        Daten mit den Personenbezogenen Daten findet nicht statt.
      </section>
      <section>
        <h2 style={headerStyle}>Personenbezogene Daten</h2>
        Personenbezogene Daten sowie Bankverbindungen werden ausschließlich zur
        Abwicklung der Bestellung erfragt und natürlich streng vertraulich
        behandelt. Ihre Daten bleiben bei uns so lange gespeichert, bis die
        Abarbeitung des Auftrages abgeschloßen ist, Sie uns zur Löschung
        auffordern oder Ihre Einwilligung zur Speicherung widerrufen. Die
        gesetzlichen Aufbewahrungsfristen bleiben davon unberührt. Eine
        Weitergabe Ihrer Daten an Dritte findet nicht ohne Ihre Einwilligung
        statt. Einwilligungen können Sie jederzeit durch eine formlose E-Mail
        widerrufen. Ihre persönlichen Daten werden selbstverständlich nicht zum
        Zwecke der Werbung oder Markt- und Meinungsforschung weitergegeben.
      </section>
      <section>
        <h2 style={headerStyle}>Weitergabe von Daten mit Personenbezug</h2>
        Eine Weitergabe von personenbezogenen Daten an Dritte findet ohne Ihre
        Einwilligung nicht statt.
      </section>

      <section>
        <h2 style={headerStyle}>Datensicherheit</h2>
        Unser Online-Auftritt ist ausschließlich über https:// (SSL) erreichbar.
        Dadurch gewährleisten wir, daß der Datenaustausch zwischen Ihrem
        Browsers und unserem Server komplett verschlüsselt stattfindet. Wenn Sie
        unsere Seite z.B. über http:// aufrufen werden Sie automatisch auf
        https:// umgeleitet. Des Weiteren sind durch regelmäßige Updates und
        Wartungen der Webanwendung und der Serversoftware die IT-Sicherheit auf
        einem aktuellen Stand.
      </section>

      <section>
        <h2 style={headerStyle}>Einsatz von Cookies</h2>
        Cookies sind kleine Textdateien, die Ihr Browser in der Grundeinstellung
        automatisch speichert. Wir setzen Cookies ein, um unser Angebot
        sicherer, nutzerfreundlicher und effektiver zu machen. Cookies speichern
        keine personenbezogenen Daten. Sie können Cookies in den
        Browsereinstellungen anzeigen lassen und löschen
      </section>

      <section>
        <h2 style={headerStyle}>Auskunfts- & Widerrufsrecht</h2>
        Sie erhalten jederzeit ohne Angaben von Gründen kostenfrei Auskunft über
        Ihre bei uns gespeicherten Daten. Sie können jederzeit Ihre bei uns
        erhobenen Daten sperren, berichtigen oder löschen lassen. Sie können
        jederzeit die uns erteilten Einwilligung zur Datenerhebung und
        Verwendung ohne Angaben von Gründen widerrufen. Schreiben Sie uns
        einfach eine E-Mail an berger-mariaposching@t-online.de
      </section>
    </div>
  )
}
export default ImpressumContent
