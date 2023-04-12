import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Project1 from "./assets/components/Project1";
import Project2 from "./assets/components/Project2";
import Project3 from "./assets/components/Project3";
import Project4 from "./assets/components/Project4";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Project1" element={<Project1 />} />
      <Route path="/Project2" element={<Project2 />} />{" "}
      <Route path="/Project3" element={<Project3 />} />{" "}
      <Route path="/Project4" element={<Project4 />} />
    </Routes>
  );
}

export default App;
