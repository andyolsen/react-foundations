import { NavLink } from "react-router-dom";
import "./MyMenu.css";

export default function Menu() {
    return (
		<nav>
			<NavLink to="/">Home</NavLink> &nbsp;|&nbsp;
			<NavLink to="/usingDom">Using DOM</NavLink> &nbsp;|&nbsp;
			<NavLink to="/uncontrolledComponent">Using an uncontrolled component</NavLink>
			<NavLink to="/controlledComponent">Using a controlled component</NavLink>
		</nav>
    )
}