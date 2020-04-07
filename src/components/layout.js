import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main className="main">
        <div className="main__container">{children}</div>
      </main>
      <Footer />
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout