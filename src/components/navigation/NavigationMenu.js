import { NavLink } from "react-router-dom";
import ResetLocation from '../../helpers/ResetLocation'

const activeNavLink = ({ isActive }) =>
  "gray-text nav-link" + (isActive ? " active" : "");

  const NavigationMenu = (props) => {
	return (
	  <section className="menu-links">
		<NavLink
		  to="/"
		  className={({ isActive }) =>
			"gray-text nav-link" + (isActive ? " main-active" : "")
		  }
		  onClick={() => {
			ResetLocation();
			props.closeMenu();
		  }}
		>
		  Home
		</NavLink>
		<NavLink
		 to="/"
		  onClick={() => {
			ResetLocation();
			props.closeMenu();
		  }}
		  className={activeNavLink}
		>
		  About
		</NavLink>
		<NavLink
		  to="/"
		  className={activeNavLink}
		  onClick={() => {
			ResetLocation();
			props.closeMenu();
		  }}
		>
		  Portfolio
		</NavLink>
		<NavLink
		  to="/"
		  className={activeNavLink}
		  onClick={() => {
			ResetLocation();
			props.closeMenu();
		  }}
		>
		  Contact
		</NavLink>
	  </section>
	);
  };
  
  export default NavigationMenu;