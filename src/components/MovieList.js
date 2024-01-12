import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (movies === null) return null;

  return (
    <div className="px-6 ">
      <h1 className="sm:text-2xl text-xl py-6 font-semibold text-white">{title}</h1>
      <div className="flex overflow-x-scroll" style={{ overflowX: "scroll", scrollbarWidth: "none" }}>
        <style>
          {`
            .flex::-webkit-scrollbar {
              width: 0 !important;
            }
          `}
        </style>
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
