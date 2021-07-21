import './App.scss';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Portafolio from './components/portafolio/Portafolio';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import Works from './components/works/Works';
import { useState } from 'react'
import Menu  from './components/menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)



  return (
    <div className="App">
    <Topbar menuOpen ={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
    <Intro />
    <Portafolio />
    <Works />
    <Testimonials />
    <Contact />
    </div>
    </div>
  );
}

export default App;
