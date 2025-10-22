import React, { useEffect, useState } from 'react'

const Home = ({searchResult}) => {


const [movies , setMovies] = useState([]);
const [error , setError] = useState(null);
useEffect(() =>{
    const fetchMovies = async () => {
        try{
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=ccccfd1ecaf69b8f464f4800a3ee4f20&language=en-US&page=1`     
            );
            const data = await response.json();
            console.log(data);
           setMovies(data.results); // TMDB returns movies in "results"
        
        }
        catch (error){
            console.error('error fetching',error);
            
           

        }

    }
    fetchMovies();


},[]);

const movieDisplay = searchResult.length > 0 ? searchResult : movies;

  return (

    <div className='bg-[#091530] p-10 '>
        <h1 className='text-white text-3xl font-serif font-3xl ml-20 mb-10 max-sm:ml-5'>{searchResult.length > 0 ? 'Searched Results ' : 'Popular'}</h1>

    <div className='grid 
    grid-cols-3 
    gap-10 
    ml-20
    mt-10
    max-[768px]:grid-cols-2 
    max-[600px]:grid-cols-2 
    max-[600px]:ml-5 
    max-sm:gap-10 
    max-[395px]:grid-cols-1
    max-[395px]:ml-15
    
    '>

        {movieDisplay.map((movie) => (
            <div key={movie.id}>
                <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className='w-64 
                h-80
                rounded-lg 
                object-cover
                transition-transform
                duration-300 
                hover:scale-105 
                max-md:w-50
                max-md:h-65
                max-sm:h-70
               '/>
                <h3 className='text-white cursor-pointer'>{movie.original_title}</h3>
                <p className='text-white'>⭐{movie.vote_average}</p>

            </div>

))}
      
    </div>
</div>
  )
}

export default Home
