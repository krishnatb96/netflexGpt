import React from 'react'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
  const  MainContainer = () => {
    const moview  = useSelector(store=> store?.movies?.nowPlayingMoview);
    console.log(moview)
    if(!moview) return;
    const mainMoview =  moview[0];
    const {original_title ,overview,id} = mainMoview
  return (
    <div className='pt-0'>
<VideoTitle title={original_title} overview={overview} />
<div className='mt-3'>
<VideoBackground moviewId={id}/>
</div>
    </div>
  )
}
export default MainContainer;


