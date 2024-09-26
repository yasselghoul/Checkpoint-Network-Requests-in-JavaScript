import React, { useState } from 'react'
import AddMovie from './Components/Addmovie/AddMovie'
import MovieList from './Components/MovieList/MovieList'
import Search from './Components/SearchMovie/Search'
import {movies} from './data/MovieData'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom' 
import HomePage from './HomePage'
import Trailer from './Components/Trailer/Trailer'
const App = () => {
  // nbich ysour des modifications lil state 
  // n7otha fi state
  const [ListMovie,setListMovie]=useState(movies)
        {/* partie ajout de film Function  */}
const handelAddMovie=(newMovie)=>{
setListMovie(
  [...ListMovie,newMovie]
)
}

const removeMovie=(idM)=>{
  setListMovie(
    ListMovie.filter((el)=> el.id !== idM)
  )
  }
// func recherhce

const [nameSearch,setNAmeSearch]=useState('')

  return (
    <div>
      <Navbar/>
      <Search  setNAmeSearch={setNAmeSearch} />

      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/MovieList'element ={<MovieList  removeMovie={removeMovie}  ListMovie={ListMovie}  nameSearch={nameSearch}/>}/>
   
      <Route path='/AddMovie' element={<AddMovie  handelAddMovie={handelAddMovie}/>}/>
      <Route path='/Trailer/:id' element={<Trailer/>}/>
      </Routes>
    </div>
  )
}

export default App