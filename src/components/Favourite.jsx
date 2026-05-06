 import React, { useState } from "react";

const Favourite = ({ favourites, onRemoveFavourite }) => {
  const [removeFav , setRemoveFav ] = useState(false);

  function handleRemoveFav (){
    setRemoveFav(true);

    setTimeout(() => {
      setRemoveFav(false);

    } , 3000);
  }
  return (
    <div className="bg-[#091530] min-h-screen p-10">
      <h1 className="text-white text-3xl font-mono font-bold mb-10 ">
        Favourite Movies
      </h1>

      {favourites.length === 0 ? (
        <p className="text-white text-lg font-mono ">No favourites yet.</p>
      ) : (
        <div className="grid grid-cols-4 gap-10  p-8 bg-[#0B1220] max-sm:grid-cols-2 ">
          {favourites.map((movie) => (
            <div key={movie.id} className="relative p-4 rounded-lg bg-[#1F2226] hover:scale-105 transition-transform duration-300">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-59 h-80  rounded-lg cursor-pointer object-cover transition-transform duration-300 "
              />
              <h3 className="text-white mt-2 cursor-pointer ">
                {movie.original_title}
              </h3>
              <p className="text-white">⭐{movie.vote_average}</p>
              <button
                className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700"
                onClick={() => {onRemoveFavourite(movie.id);
                  handleRemoveFav();
                }

                }
              
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      
      {removeFav && (
        <div className="fixed top-21 pl-7 pr-8 pt-4 pb-4 bg-gradient-to-r from-red-500 to-red-350 opacity-100 right-1 transform  text-white font-bold rounded-sm shadow-lg z-50 transition-all duration-300  ">Removed</div>

      )}
      
    </div>
  );
};

export default Favourite;