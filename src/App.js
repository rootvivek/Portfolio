import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './assets/components/Home';
import About from './assets/components/About';
import Footer from './assets/components/Footer';

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
    <Footer/>
  </> 
  );
}

export default App;
