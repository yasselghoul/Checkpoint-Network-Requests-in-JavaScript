import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   
   <>
    <ul className="navbarr">
    <button > <Link to='/'>Home Page </Link></button>        <button > <Link to='/MovieList'>Movie List </Link></button>
        <button > <Link to='/AddMovie'>Add Movie </Link></button>
        <li><a href="#contact"></a></li>
    </ul>

   
    </>
  )
}

export default Navbar