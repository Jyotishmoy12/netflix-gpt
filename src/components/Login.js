import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);

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
      <form className="login-form bg-black bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-1/3 rounded-lg shadow-lg sm:shadow-none">
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
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg hover:border-b-2 hover:border-orange-500 outline-none "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg hover:border-b-2 hover:border-orange-500 outline-none "
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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
