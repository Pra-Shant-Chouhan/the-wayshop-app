import React from 'react'
import Footer from './Layout/coponentHedFoot/Footer.jsx'
import Header from './Layout/coponentHedFoot/Header.jsx'

function Layout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer/>
      <a href="#" id="back-to-top" title="Back to top" style={{ display: "none" }}>&uarr;</a>

      
    </>
  )
}

export default Layout