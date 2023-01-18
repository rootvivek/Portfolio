import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Footer from "./assets/components/Footer";
import Project1 from "./assets/components/Project1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project1" element={<Project1 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
