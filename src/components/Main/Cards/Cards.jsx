import React from "react";
import MainCardOne from "../../../assets/Img/MainCardOne.png";

const Cards = (props) => {
  console.log(props);
  return (
    <div>
      <div className="CardMain">
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Cards;
