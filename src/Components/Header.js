import React from 'react'
import { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/FireBase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from '../utils/constants';
function Header() {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSigOut = ()=>{
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  navigate('/error')
});
  }
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      }
    });
    return () => unsubscribe()
  }, []);
  return (
    <div className=''>
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img className='w-44' src={LOGO} alt='main-logo' />
     {
      user && (
        <div className='flex gap-2 align-middle p-4'>
        <img alt='userIcon' src=''/>
        <p>{user?.displayName}</p>
        <button className='text-white' onClick={handleSigOut}>
         Sign Out
        </button> 
        
      </div>
      )
     }
    </div>
    
    </div>

  )
}

export default Header  