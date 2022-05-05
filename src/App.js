import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './assets/components/Home';
import About from './assets/components/About';
import Navbar from './assets/components/Navbar';

function App() {
  return (
  <>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </> 
  );
}

export default App;
