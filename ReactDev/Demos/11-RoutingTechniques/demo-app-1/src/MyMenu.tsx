import { NavLink } from "react-router-dom";
import "./MyMenu.css";

export default function MyMenu() {
    return (
		<nav>
			<NavLink to="/">Home</NavLink> &nbsp;|&nbsp;
			<NavLink to="/contact">Contact</NavLink> &nbsp;|&nbsp;
			<NavLink to="/about">About</NavLink>
		</nav>
    )
}