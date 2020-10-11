import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <header className="navigation-bar">
      <img src={logo} alt="" />
      <ul className="navigation-link">
        <li>
          <Link className="characters-link" to="/">
            Characters
          </Link>
        </li>
        <li>
          <Link className="quotes-link" to="/">
            Quotes
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
