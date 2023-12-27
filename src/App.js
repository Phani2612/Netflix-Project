import Action from "./COMPONENTS/Action";
import Comedy from "./COMPONENTS/Comedy";
import Navbar from "./COMPONENTS/Navbar";
import TrendingMovies from "./COMPONENTS/TrendingMovies";
import './App.css'
import { FontAwesomeIcon,FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div>
        <Navbar/>
        <TrendingMovies/>
        <Action/>
        <Comedy/>
       

    </div>
  );
}

export default App;
