import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux"

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return (
    <div className="bg-black">
      <div className="lg:-mt-60 md:-mt-10 sm:pt-0 pt-0 relative z-10">
      <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies}/>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
     </div>

      {/*
      movie list-popular
         movie cards
      movie list-now playing
      movie list-trending
      movie list-horror
      
      
      
      */}
    </div>
  )
}

export default SecondaryContainer