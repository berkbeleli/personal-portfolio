import { NavLink } from "react-router-dom";
import AppIcon from "../../assets/images/app-icon.svg";
import ResetLocation from '../../helpers/ResetLocation';

const NavigationLogo = (props) => {
	return(
		<NavLink
		to="/"
		className="logo-section"
		onClick={() => {
		  ResetLocation();
		  props.closeMenu();
		}}
	  >
		<img src={AppIcon} alt="logo"></img>
	  </NavLink>
	);
};

export default NavigationLogo;