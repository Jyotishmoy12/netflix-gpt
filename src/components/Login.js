import React, { useRef, useState } from 'react';
import Header from './Header';
import {checkValidData} from '../utils/validate';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { signInWithEmailAndPassword,updateProfile} from "firebase/auth";

import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

  // by default it will be in login page
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email=useRef(null); // how will i get the data from input box while typing by using useRef hook it will create a reference

  const password=useRef(null); 
  const name=useRef(null);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleButtonClick=()=>{
    // validate the form data 
    
    // console.log(email.current.value);
    // console.log(password.current.value);
    // form validation
   const message=checkValidData(email.current.value, password.current.value)
   setErrorMessage(message);

   if(message) return ; // not valid so dont go ahead
    // else sign in/sign up
    if(!isSignInForm){
     // sign up logic
     createUserWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value
      )
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
     displayName:name?.current?.value, 
      
     //photoURL: "https://avatars.githubusercontent.com/u/93263133?v=4"
    }).then(() => {
      const {uid, email, displayName} = auth?.currentUser;
      // add them in store
      dispatch(addUser({
        uid:uid, 
        email:email, 
        displayName:displayName, 
        //photoURL:photoURL
      })
      )
      
      // Profile updated!
     navigate("/browse")
     // console.log(name.current.value)
    }).catch((error) => {
      setErrorMessage(error.Message)
      //console.log(error.message)
    });
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "_" +errorMessage);
    // ..
  });

    }
    else{
       // sign in or log in logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    //console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "_" +errorMessage);
  });

    }
  }

  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInForm);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <div className="absolute w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
          className="w-full"
        />
      </div>
      <form 
      onSubmit={(e)=>e.preventDefault()}
      className="login-form bg-black bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-1/3 rounded-lg shadow-lg sm:shadow-none">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? 'Log In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-1 w-full bg-gray-800 rounded-lg hover:border-b-2 hover:border-orange-500 outline-none"
          />
        )}

        <input 
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg hover:border-b-2 hover:border-orange-500 outline-none "
        />
        {/* <p className="text-red-500">{errorMessage}</p> */}
        <input 
         ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg hover:border-b-2 hover:border-orange-500 outline-none "
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New to Netflix? Sign Up Now'
            : 'Already a User? Login Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
