import React from 'react';
import {Link} from 'react-scroll';
import icon from '../images/study_icon.png';
import './navbar.css';

function NavBar(){


    return (
        <div className="nav-options">
            <img src={icon} className="icon" height="20"/>
            <span className="nav-title"><Link to="page-title" smooth="true" className="nav-item" offset={-90}>Study Tool</Link></span>
            <span><Link to="todo-list" className="nav-item" smooth="true" offset={-90}>To Do List</Link></span>
            <span><Link to="timer" className="nav-item" smooth="true" offset={-90}>Timer</Link></span>
            <span><Link to="study-break" className="nav-item" smooth="true" offset={-90}>Study Break</Link></span>
        </div>
    )
}

export default NavBar;