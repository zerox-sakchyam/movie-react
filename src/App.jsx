import React , {useState} from "react";
import Home from "./components/Home"
import Nav from "./components/Nav"
function App() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div>
     <Nav  setSearchResult={setSearchResult}/>
     <Home searchResult={searchResult} />
    </div>
  )
}

export default App
