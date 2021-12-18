import React from 'react'
import Navbar from "../../partials/Navbar3"
import Footer from "../../partials/Footer"


const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </React.Fragment>
  )
}

export default Layout