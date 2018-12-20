import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
    <div className ={'head' + (props.isAtTop ? ' ' : ' notTop')}>
      <ul className={'head-nav' + (props.isNavOpen ? ' navOpen' : '')}>
        <li><NavLink id="banner" className ={'head-name' + (props.isAtTop ? ' ' : ' notTop')} exact to="/">LEANDRO INUMERABLE</NavLink></li>
        <li><NavLink id="projects" exact to="/projects">projects</NavLink></li>
        <li><NavLink id="resume" exact to="/resume">resume</NavLink></li>
        <li><NavLink id="aboutMe" exact to="/aboutMe">about</NavLink></li>
        <li><NavLink id="contact" exact to="/contact">contact</NavLink></li>
      </ul>    
    </div>
);

export default Header;