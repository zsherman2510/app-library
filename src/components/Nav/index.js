import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='logo'>Library</div>
        <ul className='links'>
            <li><Link to="/available">Available Books</Link></li>
            <li><Link to="/myLibrary">My Library</Link></li>
        </ul>
    </div>
  )
}

export default Nav