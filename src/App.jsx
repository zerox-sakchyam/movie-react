
import React , {useState} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home"
import Nav from "./components/Nav"
import Favourite from "./components/Favourite";
import Popular from "./components/Popular";
function App() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div>
      <BrowserRouter basename="/movie-react">
      <Nav setSearchResult={setSearchResult} />
      <Routes>
        <Route path="/page=1" element={<Home searchResult={searchResult}/>} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/favourite" element={<Favourite />} />
        
      
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
