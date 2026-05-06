import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";

function Nav({setSearchResult}) {
  const[searchTerms , setSearchTerms] = useState('');
  const [error , setError] = useState(null);
  const [searchClick , setSearchClick] = useState(false);
 const [isOpen , setIsOpen] = useState(false);



 useEffect (() => {
  if(isOpen){
    document.body.style.overflow = 'hidden';

  }
  else {
    document.body.style.overflow = 'auto';

  }

  return() => {
    document.body.style.overflow = 'auto';

  }
 }, [isOpen]);


 function toggleHandle(){
  setIsOpen(!isOpen);
 }
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
    <nav className="bg-[hsl(222,35%,21%)] p-5 max-[608px]:text-1xl">
<div className="md:hidden cursor-pointer absolute "
         onClick={toggleHandle}
          >
          <span className="material-symbols-outlined text-3xl text-white max-md:mt-0.5" 
           style={{ fontSize: "35px" }}>
            menu
          </span>
        </div>
      <div className="flex justify-around">
      <h1 className="text-white
       text-3xl 
       cursor-pointer 
       font-bold 
       max-md:text-2xl
       max-md:ml-10
       max-md:mt-0.5
      
       ">Movieverse</h1>
      <ul className="text-white
      flex
      mt-2 
      gap-10
      text-lg
      cursor-pointer
      font-bold 
      
      ">
        {/* Desktop Menu */}
       <Link to='/page=1'><li className="hover:text-gray-400 max-md:hidden">Home</li></Link>
        <Link to='/popular'> <li className="hover:text-gray-400 max-md:hidden">Popular</li></Link>
        <Link to='/favourite'> <li className="hover:text-gray-400 max-md:hidden">Favourites</li></Link>

       
        <li onClick={handleToggle}><span className="material-symbols-outlined hover:text-gray-400 "
        style={{ fontSize: "30px" }}>search</span></li>

       
      </ul>
      </div>
       
    
     {searchClick && (<form onSubmit={fetchMovies}>
          <input className='w-[100%]  border-1 text-lg text-black bg-white border-white rounded-md font-serif pl-5 p-2 mt-2 
           ' type="text" placeholder="Search..." value={searchTerms} onChange={(e) => setSearchTerms(e.target.value)
            
           } />
        </form>)}
    </nav>
     {isOpen && (
       <div className="fixed inset-0 z-[9999] bg-white-500/20 backdrop-blur-md md:hidden animate-fadeIn">
      <ul className=" flex flex-col gap-4 text-[14px] p-10 h-[100%] fixed md:hidden mt-0  bg-[hsl(222,35%,21%)] text-white font-serif z-[9999] absolute  left-0 top-0 text-center space-y-2 animate-fadeIn bg-[hsl(222,35%,20%)] ">
         <span onClick={toggleHandle}className="material-symbols-outlined text-3xl text-white hover:text-gray-400" 
           style={{ fontSize: "45px" }}>
             chevron_left
          </span>
        <Link to='/page=1'><li className="hover:text-gray-400 border-b  py-2 border-white/10">Home</li></Link>
        <Link to='/popular'> <li className="hover:text-gray-400  border-b py-2 border-white/10">Popular</li></Link>
        <Link to='/favourite'> <li className="hover:text-gray-400  border-b py-2 border-white/10">Favourites</li></Link>
        <Link to='/favourite'> <li className="hover:text-gray-400  border-b py-2 border-white/10">Favourites</li></Link>
        <Link to='/favourite'> <li className="hover:text-gray-400 border-b py-2 border-white/10 ">Favourites</li></Link>
        <Link to='/favourite'> <li className="hover:text-gray-400  border-b py-2 border-white/10">Favourites</li></Link>
        <Link to='/favourite'> <li className="hover:text-gray-400  border-b py-2 border-white/10">Favourites</li></Link>
        <Link to='/favourite'> <li className="hover:text-gray-400  border-b py-2 border-white/10">Favourites</li></Link>
      </ul>
     </div>
     )}
  
   
  </>
  );
}

export default Nav;
