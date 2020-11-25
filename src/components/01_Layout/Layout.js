import React from "react"
import Navbar from "../02_Navigation/Navbar"
import Header from "../03_Header/Header"
import Footer from "../09_Footer/Footer"
import "./Layout.module.scss"
import "../00_Lib/variables.scss"



const Layout = ({children}) => {
  return (
    <>

      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}
export default Layout