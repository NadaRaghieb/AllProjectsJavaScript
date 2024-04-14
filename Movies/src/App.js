import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import NavBar from './components/NavBar';
import MoviesList from './components/MoviesList'
import MovieDetails from './components/MovieDetails'
import  axios  from 'axios';


function App() {
const[movies, setMovies]=useState([])
const[pageCount, setPageCount]=useState(0)
  // get all Movies
  const getAllMovies= async () =>{
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar')
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }
  // get page from Api
  const getPage= async (page) =>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }
  useEffect(()=>{
    getAllMovies()
  },[])
  
  // search in API
  const search= async (word)=>{
    if (word === ''){
      getAllMovies()
    }else{
      const res =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
    }
  }
  useEffect(()=>{
    getAllMovies()
  },[])

  return (
    <div className="font color-body ">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />} />

            <Route path="/movie/:id" element={<MovieDetails />} />

          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
