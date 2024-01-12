import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 pr-4 relative overflow-hidden">
      <div className="transition-transform transform-gpu hover:scale-105">
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default MovieCard;
