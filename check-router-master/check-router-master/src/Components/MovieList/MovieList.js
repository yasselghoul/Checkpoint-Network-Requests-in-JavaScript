import React, { useState } from 'react'
import MovieCard from './MovieCard'

const ListMovie = ({ListMovie,nameSearch,removeMovie}) => {
  const [sort,setSort]=useState('all')
  return (
    <>
    <div  style={{display:"flex"}}>
    <button    style={{width:"200px",margin:"5px"}}  onClick={()=>setSort('action')}   >Action</button>
    <button style={{width:"200px",margin:"5px"}}   onClick={()=>setSort('scienceFiction')} >scienceFiction</button>
    <button  style={{width:"200px",margin:"5px"}}   onClick={()=>setSort('Horror')}>Horror</button>
    <button  style={{width:"200px",margin:"5px"}}   onClick={()=>setSort('all')}>all</button>


  </div>
    <ul className="list" style={{
      display:'flex'
    }

    }>
           {
            ListMovie.length >0 && sort==="all" ? 
           
            ListMovie.filter((el)=> el.Title.toLowerCase().includes(nameSearch.toLowerCase().trim())  )
            .map((el)=>   <MovieCard  movie={el} removeMovie={removeMovie}   />):  <h1></h1>
           }

     {
            ListMovie.length >0 && sort==="action" ? 
            ListMovie
            .filter((el)=>  el.Description ==="action")
            .map((el)=>   <MovieCard movie={el} removeMovie={removeMovie}   />):  <h1></h1> 
           }

{
            ListMovie.length >0 && sort==="scienceFiction" ? 
            ListMovie
            .filter((el)=>  el.Description ==="scienceFiction")
            .map((el)=>   <MovieCard  movie={el} removeMovie={removeMovie}   />):  <h1></h1> 
           }


{
            ListMovie.length >0 && sort==="Horror" ? 
            ListMovie
            .filter((el)=>  el.Description ==="Horror")
            .map((el)=>   <MovieCard  movie={el} removeMovie={removeMovie}   />):  <h1></h1> 
           }






          </ul>
    </>
  )
}

export default ListMovie