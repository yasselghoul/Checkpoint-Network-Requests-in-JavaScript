import React from 'react'
import { useParams } from 'react-router-dom'
import { movies } from '../../data/MovieData'
import './Trailer.css'
const Trailer = () => {
    const {id}=useParams()
    const foundmovie =movies.find((el)=> el.id === Number(id))
  return (
   
    <div className='body'>
    <div className="bg">
      {/* <h1>{movie.Title}</h1> */}
    </div>
    <div className="nft">
      <div className="main">
        <img className="tokenImage" src={foundmovie.PosterURL}  alt="NFT" />
        <h2>{foundmovie.Title} </h2>
        <p className="description">{foundmovie.Description} </p>
        <div className="tokenInfo">
        
          <div className="duration">
            <ins></ins>
            <p>{foundmovie.Rate}</p>
          </div>
        </div>
        <hr />
        <div className="creator">
          <div className="wrapper">
            <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
          </div>
          </div>
          
          </div>
          </div>
          </div>
  )
  
}

export default Trailer
