import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    // fetch trailer videos and updating the trailer video data

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"
            + movieId +
            "/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json();
        //console.log(json)
        const filterData = json.results.filter(video => video.type === "Trailer")
        // if trailer is not found then use any of the videos from json.results
        const trailer = filterData.length ? filterData[0] : json.results[0];
        //console.log(trailer)
        //setTrailerId(trailer.key)
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(() => {
        getMovieVideos()
    }, []);
}

export default useMovieTrailer