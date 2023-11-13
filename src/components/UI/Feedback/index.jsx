import MyButton from "../MyButton/Mybutton";
import MyInput from "../MyInput/MyInput";
import { AiOutlineClose } from "react-icons/ai";

import "./styles.css";

function Feedback({ active, setActive }) {
  return (
    <div
      className={active ? "feedback active" : "feedback"}
      onClick={() => setActive(false)}
    >
      <div className="feedback__form" onClick={(e) => e.stopPropagation()}>
        <AiOutlineClose onClick={() => setActive(false)} />
        <MyInput
          type="text"
          name="input"
          placeholder="введите номер телефона"
        />
        <MyButton>Свяжитесь со мной</MyButton>
      </div>
    </div>
  );
}

export default Feedback;
