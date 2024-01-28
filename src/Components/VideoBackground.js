import useMovieTrailer from "./useMovieTrailer";
import { useSelector } from "react-redux";
function VideoBackground({ moviewId }) {
  // fetch trailer video && updating the store with tailer video data 
  const trailerVdo = useSelector(store => store?.movies?.trailerVideo);
  useMovieTrailer(moviewId)
  
  return (
    <div className="w-screen">
      <iframe
       className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVdo?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
