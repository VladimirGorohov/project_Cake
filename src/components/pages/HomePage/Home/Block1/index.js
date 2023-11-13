import { MdOutlinePayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiPriceTag } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React from "react";

import "./style.css";

function Block1() {
  console.log("randerBlock-1");

  return (
    <div className="block__1">
      <div className="box">
        <GiPriceTag className="box__img" />
        <p className="box__text">Цены</p>
      </div>
      <div className="box">
        <MdOutlinePayment className="box__img" />
        <p className="box__text">Способ оплаты</p>
      </div>
      <div className="box">
        <TbTruckDelivery className="box__img" />
        <p className="box__text">Доствка</p>
      </div>
    </div>
  );
}

export default Block1;
