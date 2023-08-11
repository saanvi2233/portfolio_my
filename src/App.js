import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
//import PortFolio from './components/PortFolio';
import Contact from './components/Contact';
import Expirence from './components/Expirence';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      {/* <PortFolio/> */}
      <Expirence/>
      <Contact/>
      {/* <h1 className="text-4xl font-bold font-signature">heyy</h1> */}
          </div>
  );
}

export default App;
