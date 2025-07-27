import { NavLink } from "react-router-dom";
import './MyMenu.css'

export default function MyMenu() {
    
    return (
        <nav className="menu">		
            <NavLink to="/">Home</NavLink>&nbsp;|&nbsp;
            <NavLink to="/books">Books</NavLink>&nbsp;|&nbsp;
            <NavLink to="/films">Films</NavLink>&nbsp;|&nbsp;
            <NavLink to="/moreStuff">More stuff</NavLink>
        </nav>  
    )
}