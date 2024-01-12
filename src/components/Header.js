import React from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_ICON } from '../utils/constants';
import { toggleGptSearchView } from "../utils/gptSlice"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  // it is becuase header is present in every page and in routing also
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        // add them in store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
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
    return () => unsubscribe();

  }, []);

  const handleGptSearchClick = () => {
    // toggle Gpt Search
    dispatch(toggleGptSearchView())
  }
  return (
    <div className="absolute px-3 w-screen py-2  z-10 flex items-center justify-between">
      <div className="flex items-center">
        <img
          className="sm:w-32 w-24"
          src={LOGO}
          alt="logo"
        />

      </div>

      {
        user &&
        <div className="flex items-center ">

          <button
            className='py-1 px-2 m-2 bg-transparent text-white flex items-center space-x-1 text-xs sm:font-bold sm:text-sm hover:bg-purple-600'
            onClick={handleGptSearchClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="hidden sm:inline">GPT Search</span>
          </button>

          <img
            alt="usericon"
            //src={user?.photoURL}
            src={USER_ICON}
            className="w-8 h-8 sm:w-12 sm:h-12 p-2"
          />

          <button
            onClick={handleSignOut}
            className="px-1 py-0.5 bg-red-600 text-white mr-4 rounded text-xs sm:font-bold sm:text-sm"
          >
            Sign Out
          </button>

        </div>
      }
    </div>
  );
};

export default Header;
