import React from 'react'
import logo from '../img/logo.svg'
import './Header.css'

export function Header() {
  return (
    <div>
      <nav>
          <img className='logo--img' src={logo} alt="smiley face"/>
          <span className='logo--title'>Meme Generator</span>
        <span className='course--title '>React Course - Project 3</span>
      </nav>
    </div>
  )
}
