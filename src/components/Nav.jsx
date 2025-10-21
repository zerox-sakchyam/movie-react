import React , {useState} from "react";
function Nav({setSearchResult}) {
  const[searchTerms , setSearchTerms] = useState('');
  const [error , setError] = useState(null);

  const fetchMovies = async (e) => {
    e.preventDefault();
        try{
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=ccccfd1ecaf69b8f464f4800a3ee4f20&query=${searchTerms}&language=en-US&page=1`     
            );
            const data = await response.json();
            console.log(data);
           setSearchResult(data.results); 
        
        }
        catch (error){
            console.error('error fetching',error);
            setError('Something Went Wrong');
           
           

        }



    }

    

    
    

  

  return (<>
    <nav className="bg-[hsl(222,35%,21%)] flex justify-around p-5 max-[608px]:text-1xl">
      <h1 className="text-white text-3xl cursor-pointer font-bold max-[580px]:text-[20px] max-[580px]:mt-2">Movieverse</h1>
      <ul className="text-white flex mt-2 gap-10 text-lg cursor-pointer font-bold max-[621px]:ml-7 max-[621px]:text-1xl  max-[580px]:text-1xl  max-[580px]:ml-20 max-[580px]:text-[15px]">
        <li className="hover:text-gray-400">Home</li>
        <li className="hover:text-gray-400">Popular</li>
        <li className="hover:text-gray-400">Redeem</li>
        <li className="hover:text-gray-400">My Movies</li>
        <form onSubmit={fetchMovies}>
          <input className='flex justify-end border-2 rounded-lg p-1 text-white ' type="text" placeholder="Search..." value={searchTerms} onChange={(e) => setSearchTerms(e.target.value)} />

        </form>
      </ul>
    </nav>
  
   
  </>
  );
}

export default Nav;
