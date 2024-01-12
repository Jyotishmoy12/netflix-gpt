import React, {useRef} from 'react';
import lang from '../utils/languageConstants';
import {SUPPORTED_LANGUAGES} from "../utils/constants"
import {useDispatch, useSelector} from "react-redux"
import { changeLanguage } from '../utils/configSlice';
//import openai from "../utils/openai"

const GptSearchBar = () => {
  const dispatch=useDispatch()
  const handleLanguageChange=(e)=>{
     dispatch(changeLanguage(e.target.value))
  }
  const langKey=useSelector(store=>store.config.lang)
  const searchText=useRef(null)
  // const handleGptSearchClick= async()=>{
  //   console.log(searchText.current.value)
  //   // make an api call to gpt api and get movie results
  //   const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query :"+searchText.current.value+". only give me names of 5 movies, coma seperated. like the example result ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
  //  const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: 'user', content:gptQuery}],
  //     model: 'gpt-3.5-turbo',
  //   });
  // if(!gptResults.choices){
  //   // todo : write error handling
  // }
  //   console.log(gptResults.choices?.[0]?.message?.content)
  // }

  return (
    <div className="-pt-[10%] flex flex-col items-center justify-center h-screen">
      <h1 class="text-3xl font-bold text-center text-white mb-6">Movie Recommendation System</h1>
      <select
        className="p-2 mb-2 md:mr-2 md:mb-0 bg-gray-800 border border-gray-700 rounded-md text-white"
      onChange={handleLanguageChange}
      >
        {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier} >{lang.name}</option>)}
      </select>
      <form className="bg-black p-4 md:p-8 -mt-25 rounded-lg shadow-lg" onSubmit={(e)=>e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          className="p-2 md:p-4 m-2 w-full md:w-96 lg:w-120 bg-gray-800 border border-gray-700 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg" >
          {lang[langKey].search}
        </button>
        <h5 class="text-white p-4 text-center font-bold border-none">OpenAI keys are paid, so I can't do it now. Send me some money :)</h5>
      </form>
    </div>
  );
};

export default GptSearchBar;
