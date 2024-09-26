import React, { useState } from 'react'
import './AddMovie.css'
import { Link } from 'react-router-dom'
const AddMovie = ({handelAddMovie}) => {
  // state mte3 les input mte3i 
  const [Title,setTitle]=useState('')
  const [Description,setDescription]=useState('')
  const [Rate,setRate]=useState('')
  const [PosterURL,setPosterURL]=useState('')

// function
const handel=()=>{
  handelAddMovie(
    {
      Title:Title,
      Description:Description,
      PosterURL:PosterURL,
      Rate:Rate
    }
  )
}
  return (
    <div className='bodyForm'>
      <div className="form">
  <div className="title">Welcome</div>
  <div className="subtitle">Let's create your Movie!</div>
  <div className="input-container ic1">

    {/* input1 */}
    <input id="firstname" className="input" type="text" value={Title} onChange={(el)=>setTitle(el.target.value)} placeholder=" " />


    <div className="cut" />
    <label htmlFor="firstname" className="placeholder">
     Title Movie
    </label>
  </div>
  <div className="input-container ic2">
    {/* inout2 */}
    <input id="lastname" className="input" type="text" placeholder=" " value={PosterURL} onChange={(el)=>setPosterURL(el.target.value)}  />

    <div className="cut" />
    <label htmlFor="lastname" className="placeholder">
      Movie Poster
    </label>
  </div>
  <div className="input-container ic2">
    {/* input3 */}
    <input id="email" className="input" type="text" placeholder=" " value={Description} onChange={(el)=>setDescription(el.target.value)}  />

    <div className="cut cut-short" />
    <label htmlFor="email" className="placeholder">
      Movie Description
    </label>
  </div>
  <div className="input-container ic2">
    {/* inpu */}
    <input id="email" className="input" type="text" placeholder=" " value={Rate} onChange={(el)=>setRate(el.target.value)}  />


    <div className="cut cut-short" />
    <label htmlFor="email" className="placeholder">
      Movie Rate
    </label>
  </div>
  <button> <Link to='/MovieList' type="button"  className="submit" onClick={()=>handel()}  >
    Ajout Movie</Link>
  </button>
</div>
    </div>
  )
}

export default AddMovie