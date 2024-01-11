import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies=()=>{
    // fetch data from TMDB api and then push it into the store
  const dispatch=useDispatch()

  const getNowPlayingMovies=async ()=>{
    const data= await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?page=1", 
    API_OPTIONS
    )
    const json=await data.json();
    console.log(json.results)
    // adding into the redux store
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    getNowPlayingMovies()
  },[])
}

export default useNowPlayingMovies;