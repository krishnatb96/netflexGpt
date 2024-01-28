import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = (moviewId) =>{
    const dispatch = useDispatch()
    const getMoiewVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${moviewId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      const filteredMovie = json.results.filter((vdo) => vdo.type === "Trailer");
      const trailer = filteredMovie.length ? filteredMovie[0] : json.results[0];
      console.log("movie", filteredMovie);
     dispatch(addTrailerVideo(trailer))
    };
    useEffect(() => {
      getMoiewVideos();
    }, []);
}
export default useMovieTrailer