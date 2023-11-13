import { Link } from "react-router-dom";
import "./styles.css";

function Logo() {
  console.log("randerLogo");
  return (
    <Link className="Header__logo" to="/">
      EM_Cake56
    </Link>
  );
}

export default Logo;
