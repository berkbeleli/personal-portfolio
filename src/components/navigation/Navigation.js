import Whiteham from "../../assets/images/three-line-white.png";
import WhiteXham from "../../assets/images/x-white-icon..png";
import NavigationEmail from "./NavigationEmail";
import NavigationHamburger from "./NavigationHamburger";
import NavigationLogo from "./NavigationLogo";
import NavigationMenu from "./NavigationMenu";
import NavigationSocial from "./NavigationSocial";
import { useState } from "react";
import React from "react";
const Navigation = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const ref = React.useRef();
  function ToggleMenu() {
    hiddenMenu
      ? setHiddenMenu(false) || (ref.current.src = WhiteXham)
      : setHiddenMenu(true) || (ref.current.src = Whiteham);
  }
  function closeMenu() {
    setHiddenMenu(true) || (ref.current.src = Whiteham);
  }
  return (
    <article className="side-menu">
      <NavigationHamburger ToggleMenu={ToggleMenu} ref={ref} />
      <section className={`main-menu${hiddenMenu ? `` : ` active-menu`}`}>
        <NavigationLogo closeMenu={closeMenu} />
        <NavigationMenu closeMenu={closeMenu} />
        <NavigationSocial />
        <NavigationEmail />
      </section>
    </article>
  );
};

export default Navigation;
