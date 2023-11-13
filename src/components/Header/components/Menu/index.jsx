import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

import "./styles.css";

function Menu(props) {
  const setActive = props.setActive;
  console.log(setActive);

  return (
    <div className="Header__menu">
      <div className="Contacts">
        <div className="">
          <p className="Conacts__phone"> +7 (987)8520444 </p>
          <p className="Conacts__phone">Ежедневно с 9:00 до 21:00</p>
        </div>
        <p className="Contacts__btn" onClick={() => setActive(true)}>
          <BsTelephone /> Обратный звонок
        </p>
      </div>
      <div className="Icons">
        <a href="https://api.whatsapp.com/send?phone=9878520444">
          <AiOutlineWhatsApp className="Icons__WhatsApp" />
        </a>
        <BsInstagram className="Icons__Instagram" />
        <BsFillChatRightTextFill className="Icons__Chat" />
      </div>
    </div>
  );
}

export default Menu;
