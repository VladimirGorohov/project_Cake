import Menu from "./components/Menu";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import menuItems from "../../system/menu.json";

import "./styles.css";

function Header(props) {
  const setActive = props.setModalActive;

  return (
    <div className="Header">
      <div className="Header__wrap">
        <Logo />
        <Menu setActive={setActive} />
      </div>
      <Navigation items={menuItems} />
    </div>
  );
}

export default Header;
