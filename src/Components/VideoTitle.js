import React from 'react'

function VideoTitle({title,overview}) {
  console.log("title",title)
  return (
    <div className='absolute text-white bg-gradient-to-r from-black p-4 w-screen aspect-video pt-80'>
     <h1 className='font-bold text-3xl mb-2 '>
      {title}
     </h1>
     <p className='w-1/3'>
      {overview}
     </p>
     <div className='flex'>
    <button className='py-2 px-4 text-black font-bold bg-white rounded-md mt-3 me-3 hover:bg-opacity-8  0'> ▶️ Play</button>
    <button className='py-2 px-4 text-white font-bold bg-gray-500 rounded-md mt-3'> More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle