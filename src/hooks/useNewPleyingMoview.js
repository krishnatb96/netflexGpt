import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMoview } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
 const useNewPleyingMoview  =()=>{
    const dispatch = useDispatch()
    const getNowPlayngMoviewData = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
      const json = await data.json();
      console.log(json);
      dispatch(addNowPlayingMoview(json.results))
    }
    useEffect(()=>{
      getNowPlayngMoviewData()
    },[])
}
export default useNewPleyingMoview