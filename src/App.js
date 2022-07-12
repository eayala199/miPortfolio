import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import About from './components/about/about'
import Sustentability from './components/sustentability/sustentability';

function App() {
  return (
    <div className="bodyContainer">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="routesContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element=
              {<About/>}
            
          />
          <Route
            path="/sustentability"
            element={
              
                <Sustentability/> 
              
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
