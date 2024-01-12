import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies =()=>{
    // fetch data from TMDB api and then push it into the store
  const dispatch=useDispatch()

  const getUpcomingMovies=async ()=>{
    const data= await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?page=1", 
    API_OPTIONS
    )
    const json=await data.json();
    console.log(json.results)
    // adding into the redux store
    dispatch(addUpcomingMovies(json.results))
  }

  useEffect(()=>{
    getUpcomingMovies()
  },[])
}

export default useUpcomingMovies;