import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
const HomePage = () => {
  return (
    <div className="container">
        <button > <Link to='/MovieList'>Movie List </Link></button>
        <button > <Link to='/AddMovie'>Add Movie </Link></button>
    </div>
  )
}

export default HomePage