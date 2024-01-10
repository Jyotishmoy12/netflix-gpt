import React from 'react';
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import {useSelector } from 'react-redux'

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  
  const handleSignOut=()=>{
signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/')
}).catch((error) => {
  navigate('/error')
});
  }
  return (
    <div className="absolute w-screen px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="w-40 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>

      {
      user &&
      <div className="flex items-center ">
        <img
          alt="usericon"
          //src={user?.photoURL}
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          className="w-12 h-12 p-2"
        />
     <button  onClick={handleSignOut} className="bg-red-700 ml-4 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out font-bold">
    Sign Out
  </button>
      </div>
}
    </div>
  );
};

export default Header;
