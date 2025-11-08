
import React , {useState} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home"
import Nav from "./components/Nav"
import Favourite from "./components/Favourite";
import Popular from "./components/Popular";
function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [favourites, setFavourites] = useState([]); 

  // Add movie to favourites
  const handleAddToFavourites = (movie) => {
    if (!favourites.some((fav) => fav.id === movie.id)) {
      setFavourites((prev) => [...prev, movie]);
    }
  };

  //  Remove movie from favourites
  const handleRemoveFavourite = (id) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== id));
  };

  
  return (
    <div>
      <BrowserRouter basename="/movie-react">
      <Nav setSearchResult={setSearchResult} />
      <Routes>
        <Route path="/page=1" element={<Home searchResult={searchResult}  onAddFavourite={handleAddToFavourites}/>} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/favourite" element={<Favourite  favourites={favourites}
            onRemoveFavourite={handleRemoveFavourite}/>} />
        
      
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
