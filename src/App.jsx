import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon";
import AnalyticsTracker from "./Components/AnalyticsTracker/AnalyticsTracker";


function App() {
  return (
    <BrowserRouter>
    <AnalyticsTracker/>
      <Routes>
        <Route path="/pokemon-react/" element={<Home/>}     /> 
          <Route
          path="/pokemon-react/:pokemonId"
          element={<Pokemon />}
        />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
