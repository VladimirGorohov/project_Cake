import { Link } from "react-router-dom";
import "./style.css";

function Navigation(props) {
  // const resetReboot = function (e) {
  //   e.preventDefault();
  // };

  console.log("randerNavigation");
  const menuItems = props.items.map((item) => (
    <li key={item.id}>
      <Link className="item" to={item.link}>
        {item.title}
      </Link>
    </li>
  ));

  return (
    <div className="Header__nav">
      <ul className="nav__item">{menuItems}</ul>
    </div>
  );
}

export default Navigation;
