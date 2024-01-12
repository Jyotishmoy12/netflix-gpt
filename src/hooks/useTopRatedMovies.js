import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTopRatedMovies =()=>{
    // fetch data from TMDB api and then push it into the store
  const dispatch=useDispatch()

  const getTopRatedMovies=async ()=>{
    const data= await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?page=1", 
    API_OPTIONS
    )
    const json=await data.json();
    console.log(json.results)
    // adding into the redux store
    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(()=>{
    getTopRatedMovies()
  },[])
}

export default useTopRatedMovies;