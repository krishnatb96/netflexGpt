import React, { useState } from 'react'
import Header from './Header'

function Login() {
  const [isSignIn,setIsSignIn] = useState(true)
  const handleSignUpAndSignIn =()=>{
      setIsSignIn(!isSignIn);
  }
  return (
    <div className=''>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_medium.jpg'  alt='logo'/>
        <form className='absolute bg-black top-60 z-30 rounded-lg p-10 ml-96 bg-opacity-80'>
            <h4 className='text-white text-center font-bold text-3xl'>{isSignIn ? "Sign In": "Sign Up"}</h4>
            {
              !isSignIn &&  <input type='text' placeholder='Full Name' className='my-3 p-3 w-full rounded-md bg-gray-700 text-white'/>
            }
            <input type='email' placeholder='Email or Phone Number' className='my-3 p-3 w-full rounded-md bg-gray-700 text-white'/>
            <input type='password' placeholder='Password' className='my-3 p-3 rounded-md bg-gray-700 w-full text-white  '/>
           
           <button className='bg-red-600 text-white mt-3 p-3 rounded-lg w-full'>{isSignIn ? "Sign In": "Sign Up"}</button>
           <p className='py-4 text-white cursor-pointer'onClick={handleSignUpAndSignIn}>{isSignIn ? "New to Netflex? Sign Up Now" :"Already registered? Sign In Now"}</p>
         </form>
        </div>
      
       
    </div>
  )
}

export default Login