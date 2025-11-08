import React , {useState} from "react";
import { Link } from "react-router-dom";
function Nav({setSearchResult}) {
  const[searchTerms , setSearchTerms] = useState('');
  const [error , setError] = useState(null);
  const [searchClick , setSearchClick] = useState(false);


  function handleToggle(){
    setSearchClick(!searchClick);
  }

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
    <nav className="bg-[hsl(222,35%,21%)]  p-5 max-[608px]:text-1xl">
      <div className="flex justify-around">

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
      ">
       <Link to='/page=1'><li className="hover:text-gray-400">Home</li></Link>
        <Link to='/popular'> <li className="hover:text-gray-400">Popular</li></Link>
        <Link to='/favourite'> <li className="hover:text-gray-400">Favourites</li></Link>

       
        <li onClick={handleToggle}><span className="material-symbols-outlined text-lg mt-1 ">search</span></li>
      </ul>
        </div>
    
     {searchClick && (<form onSubmit={fetchMovies}>
          <input className='w-[100%]  border-1 text-lg text-black bg-white border-white rounded-md font-serif pl-5 p-2 mt-2 
           ' type="text" placeholder="Search..." value={searchTerms} onChange={(e) => setSearchTerms(e.target.value)} />

        </form>)}
    </nav>
  
   
  </>
  );
}

export default Nav;
