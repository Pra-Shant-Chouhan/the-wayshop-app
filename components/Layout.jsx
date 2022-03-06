import React from 'react'
import Header from './Layout/coponentHedFoot/Header'

function Layout({children}) {
  return (
    <>
      <Header />
      {children}
      <a href="#" id="back-to-top" title="Back to top" style={{ display: "none" }}>&uarr;</a>

      
    </>
  )
}

export default Layout