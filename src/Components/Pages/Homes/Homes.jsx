import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';

const Homes = () => {
    return (
        <div>
            <Home></Home>
            <Projects></Projects>
            <About></About>
            <Skill></Skill>
            <Contact></Contact>
        </div>
    );
};

export default Homes;