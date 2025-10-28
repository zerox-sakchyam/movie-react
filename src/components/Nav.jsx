import React , {useState} from "react";
import { Link } from "react-router-dom";
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
      <h1 className="text-white
       text-3xl 
       cursor-pointer 
       font-bold 
       max-[580px]:text-[20px] 
       max-[580px]:mt-2 
       max-[600px]:text-[20px] 
       max-[580px]:text-2xl 
       max-[580px]:mr-1 
       max-sm:text-[15px]
       max-sm:mt-3
       ">Movieverse</h1>
      <ul className="text-white
      flex
      mt-2 
      gap-10
      text-lg
      cursor-pointer
      font-bold 
      max-[621px]:ml-7 
      max-[621px]:text-1xl  
      max-[580px]:text-[15px]  
      max-[580px]:ml-20 
      max-[580px]:text-[15px]  
      max-[765px]:gap-5  
      max-[765px]:text-[15px]  
      max-[650px]:text-[13px] 
      max-[805px]:text-[15px] 
      max-[805px]:gap-7 
      max-[580px]:gap-4
      max-[395px]:text-[10px]
      max-[395px]:ml-5
      max-[439px]:text-[10px]
      max-[439px]:mt-4
      max-[405px]:mt-4
      max-[335px]:gap-2
      max-[335px]:ml-5
      max-[360px]:gap-2
      max-[360px]:ml-5
      ">
       <Link to='/page=1'><li className="hover:text-gray-400">Home</li></Link>
        <Link to='/popular'> <li className="hover:text-gray-400">Popular</li></Link>
        <Link to='/favourite'> <li className="hover:text-gray-400">Favourites</li></Link>
        <form onSubmit={fetchMovies}>
          <input className='w-40 border-1 text-black bg-white border-white rounded-lg pl-1 text-[15px] max-[765px]:w-30  max-[650px]:w-25 max-[805px]:w-35 max-[580px]:w-15 max-[580px]:text-[10px] 
          max-[395px]:border-green-500  max-[395px]:w-10 ' type="text" placeholder="Search..." value={searchTerms} onChange={(e) => setSearchTerms(e.target.value)} />

        </form>
      </ul>
    </nav>
  
   
  </>
  );
}

export default Nav;
