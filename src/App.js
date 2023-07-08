import "./App.css";
import { Route, Routes } from "react-router-dom";
//import {BrowserRouter as Router} from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Inovations from "./pages/Inovations";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <AnimatePresence>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/inovations" element={<Inovations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App;
