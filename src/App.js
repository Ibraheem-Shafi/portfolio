import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import './App.css';
import './lib/fontawesome-free-6.2.0-web/css/all.min.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() =>{
    Aos.init({duration: 1500});
  }, []);
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/contact" element={<Contact />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;