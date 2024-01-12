import React from 'react';
import lang from '../utils/languageConstants';
import {SUPPORTED_LANGUAGES} from "../utils/constants"
import {useDispatch, useSelector} from "react-redux"
import { changeLanguage } from '../utils/configSlice';

const GptSearchBar = () => {
  const dispatch=useDispatch()
  const handleLanguageChange=(e)=>{
     dispatch(changeLanguage(e.target.value))
  }
  const langKey=useSelector(store=>store.config.lang)
  return (
    <div className="-pt-[10%] flex flex-col items-center justify-center h-screen">
      <select
        className="p-2 mb-2 md:mr-2 md:mb-0 bg-gray-800 border border-gray-700 rounded-md text-white"
      onChange={handleLanguageChange}
      >
        {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier} >{lang.name}</option>)}
      </select>
      <form className="bg-black p-4 md:p-8 -mt-25 rounded-lg shadow-lg">
        <input
          type="text"
          className="p-2 md:p-4 m-2 w-full md:w-96 lg:w-120 bg-gray-800 border border-gray-700 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
