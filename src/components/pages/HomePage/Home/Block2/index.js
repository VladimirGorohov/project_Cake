import React, { useState } from "react";

import "./style.css";

function Block2(props) {
  const changeCake = function (e) {
    setDisc(props.category[e.target.id - 1]);
  };

  const categoryCake = props.category.map((item) => (
    <p onClick={changeCake} className="cake" id={item.id} key={item.id}>
      {item.title}
    </p>
  ));

  let [disc, setDisc] = useState(props.category[0]);
  let [cardOpen, setCardOpen] = useState(false);

  console.log(disc);

  return (
    <div className="block__2">
      <h1 className="header">Попробуйте наши начинки</h1>
      <div className="types__cake">
        <div className="type__cake">{categoryCake}</div>
        <div className="cake__disc">
          <h1 className="cake__title">{disc.title}</h1>
          <div className="cake__info">
            <img src={disc.img} className="cake__img" alt="cake" />
            <div className="cake__text__box">
              <p className="cake__text">{disc.discription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block2;
