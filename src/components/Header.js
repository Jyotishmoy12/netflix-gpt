import React from 'react';
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_ICON } from '../utils/constants';
import {toggleGptSearchView} from "../utils/gptSlice"

const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  
const handleSignOut=()=>{
signOut(auth).then(() => {
  // Sign-out successful.
 // navigate('/')
}).catch((error) => {
  navigate('/error')
});
  }
// it is becuase header is present in every page and in routing also
  useEffect(()=>{
 const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
       const {uid, email, displayName, photoURL} = user;
       // add them in store
       dispatch(
        addUser({
        uid:uid, 
        email:email, 
        displayName:displayName, 
        photoURL:photoURL
      })
      )
      navigate("/browse")
       
        // ...
      } else {
        // User is signed out
        dispatch(
        removeUser())
        navigate("/")
        // ...
      }
    });

    // unsubscribe when component unmounts
  return ()=>unsubscribe();

  }, []);

  const handleGptSearchClick=()=>{
    // toggle Gpt Search
    dispatch(toggleGptSearchView())
  }
  return (
    <div className="absolute px-3 w-screen py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <div className="flex items-center">
        <img
          className="sm:w-40 w-28"
          src={LOGO}
          alt="logo"
        />
      </div>

      {
      user &&
      <div className="flex items-center ">
        
        <button className='py-2 px-4 m-2 bg-purple-800 text-white rounded text-sm sm:font-bold w-30 h-9 hover:bg-purple-600'
        onClick={handleGptSearchClick}
        >{showGptSearch ? "HomePage":"GPT Search"}</button>
        <img
          alt="usericon"
          //src={user?.photoURL}
          src={USER_ICON}
          className="w-12 h-12 p-2"
        />
     <button  onClick={handleSignOut} className="px-2 py-1 bg-red-600 text-white mr-4 rounded text-sm sm:font-bold ">
    Sign Out
  </button>
      </div>
}
    </div>
  );
};

export default Header;
