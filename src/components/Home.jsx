import React, { useEffect, useState } from "react";

const Home = ({ searchResult, onAddFavourite }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [selectedMovies, setSelectedMovies] = useState(null);
  const [add, setAdd] = useState([]);
  const[favSelect , setFavSelect] = useState(null);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=ccccfd1ecaf69b8f464f4800a3ee4f20&language=en-US&page=1`
        );
        const data = await response.json();
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.error("error fetching", error);
      }
    };
    fetchMovies();
  }, []);


  
  function handleAdd(movie) {
    setAdd((prev) => [...prev, movie]);
    
  }

  const movieDisplay = searchResult.length > 0 ? searchResult : movies;

  return (
    <div className="bg-[#091530]  p-10 ">
      <h1 className="text-white text-3xl font-mono  font-bold text-4xl mb-10 max-sm:ml-5">
        {searchResult.length > 0 ? "Searched Results " : "Popular"}
      </h1>
      <div
        className="grid 
    p-8
    rounded-lg
    grid-cols-4 
    gap-10 
    bg-[#0B1220]
    max-md:grid-cols-3
    max-sm:gap-10 
    max-sm:grid-cols-2
    max-sm:
    max-sm:p-5
    "
      >
        {/* Grid for the movie */}
        {movieDisplay.map((movie) => (
          <div key={movie.id} className="relative  p-4 rounded-lg bg-[#1F2226] hover:scale-105 transition-transform duration-300 ">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              onClick={() => setSelectedMovies(movie)}
              className=" 
                w-59
                h-80
                
                cursor-pointer
                rounded-lg 
                object-cover
                transition-transform
                duration-300 

               "
            />
            <h3 className="text-white cursor-pointer mt-2">
              {movie.original_title}
            </h3>
            <p className="text-white">⭐{movie.vote_average}</p>
            <div className="flex justify-center  absolute top-0 right-0">
              <button
                className="rounded-lg  text-white hover:color-white hover:text-[#C8D0DB]"
                onClick={() => onAddFavourite(movie)}
              >
                <span className="material-symbols-outlined text-yellow-400 hover:text-white transition-colors duration-300">kid_star</span>
              </button>
            </div>
          </div>
        ))}
      </div>


       <div>
         {favSelect && (
        <div className="flex justify-center items-center fixed inset-0 bg-white-500/20 backdrop-blur-md ">
          <div className=" bg-[#131629] w-[90%] rounded-lg flex p-6 mt-0 relative max-sm:flex-col ">
            <button
              className="text-white text-[18px]   w-[5%] h-[10%] absolute top-0 right-0 rounded-sm hover:bg-red-600 cursor-pointer"
              onClick={() => setFavSelect(null)}
            >
              X
            </button>
            <img
              className="w-59 h-78 ml-5 max-sm:ml-9 rounded-md "
              src={`https://image.tmdb.org/t/p/w500${favSelect.poster_path}`}
              alt={favSelect.title}
            ></img>
            <div className=" flex flex-col justify-center gap-8 ml-10 max-sm:gap-5">
              <h2 className="text-white font-serif text-[30px] ">
                {favSelect.title}
              </h2>
              <p className="text-white">
                Ratings :⭐{favSelect.vote_average}
              </p>
              <p className="text-white text-[10px]">
                Review: {favSelect.overview || "No overview available."}
              </p>
            </div>
          </div>
        </div>
      )}
      </div>

      {/* Movie Description */}
      {selectedMovies && (
        <div className="flex justify-center items-center fixed inset-0 bg-white-500/20 backdrop-blur-md ">
          <div className=" bg-[#131629] w-[90%] rounded-lg flex p-6 mt-0 relative max-sm:flex-col ">
            <button className="text-white p-1 w-[4%] pt-2 absolute top-0 right-0 rounded-sm hover:bg-red-600 cursor-pointer"
              onClick={() => setSelectedMovies(null)}>
              <span className="material-symbols-outlined">close</span>
            </button>
            <img
              className="w-59 h-78 ml-5 max-sm:ml-9 rounded-md "
              src={`https://image.tmdb.org/t/p/w500${selectedMovies.poster_path}`}
              alt={selectedMovies.title}
            ></img>
            <div className=" flex flex-col justify-center gap-8 ml-10 max-sm:gap-5">
              <h2 className="text-white font-serif text-[30px] ">
                {selectedMovies.title}
              </h2>
              <p className="text-white">
                Ratings :⭐{selectedMovies.vote_average}
              </p>
              <p className="text-white text-[10px]">
                Review: {selectedMovies.overview || "No overview available."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
