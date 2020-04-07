import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <Link className="logo" to="/">
        {siteTitle}
      </Link>
      <ThemeToggler> 
        {({ theme, toggleTheme }) => (
          <label className="theme-switch" htmlFor="switch">
            <input type="checkbox" id="switch" className="theme-switch__checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{''}
            
            <div className="theme-switch__slider-round"></div>
            {<small className="theme-switch__text">Dark Mode</small>}
          </label>
        )}
      </ThemeToggler>
    </div>
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header