import React from "react";
import "../Main/Main.css";
import MainCardOne from "../../assets/Img/MainCardOne.png";
import MainCardTwo from "../../assets/Img/MainCardTwo.png";
import MainCardThree from "../../assets/Img/MainCardThree.png";
import Cards from "../Main/Cards/Cards";

const Main = () => {
  const datas = [
    {
      title: "1. Schedule online",
      desc: "Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.",
      img: MainCardOne,
    },
    {
      title: "2. Pay online easily",
      desc: "Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.",
      img: MainCardTwo,
    },
    {
      title: "3. Get your house cleaned",
      desc: "Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.",
      img: MainCardThree,
    },
  ];

  return (
    <div>
      <div className="container MainWrapper">
        <h2>About Us</h2>
        <p>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
          nisi felis non ultrices massa id egestas quam velit pretium nu.
        </p>
      </div>

      <div className="MainCardsAbout">
        {datas.map((data, index) => (
          <Cards
            key={index}
            title={data.title}
            desc={data.desc}
            img={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
