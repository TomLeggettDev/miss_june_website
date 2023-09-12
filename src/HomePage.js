import Header from './Header/Header.js';
import Home from './Home/Home.js';
import Watch from './Watch/Watch.js';
import Merch from './Merch/Merch.js';
import Shows from './Shows/Shows.js';
import About from './About/About.js';
import Contact from './Contact/Contact.js';   


function HomePage() {
    return (
      <>
        <Home />
        <Watch />
        <Merch />
        <Shows />
        <About />
        <Contact />
      </>
    );
  }
  
  export default HomePage;
  