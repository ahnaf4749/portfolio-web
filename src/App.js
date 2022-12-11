import { useContext } from 'react';
import './App.css';

import { ThemContext } from './Components/Context/ThemProvider';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Footer from './Components/Pages/Footer/Footer';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
import Projects from './Components/Pages/Projects/Projects';
import Skill from './Components/Pages/Skill/Skill';

function App() {
  const { theme } = useContext(ThemContext)
  return (
    <div className='max-w-screen-xl mx-auto' id={theme ? 'dark' : 'light'}>
      <Header></Header>
      <Home></Home>
      <Projects></Projects>
      <About></About>
      <Skill></Skill>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
