import React from "react";
import style from "../Header.module.css";
import HeaderWrapperImg from "../../../assets/Img/HeaderWrapper.png";
import Phone from "../../../assets/Img/Phone.png";
const HeaderWrapper = () => {
  return (
    <div className={`${style.container} ${style.HeaderWrapper}`}>
      <div className={style.HeaderWrapperInfo}>
        <h2>Quality cleaning for your home</h2>
        <p>
          Condimentum mauris sit cursus amet id non neque pharetra nulla ornare
          sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et
          nulla magna lacus penatibus.
        </p>

        <div className={style.WrapperBtn}>
          <div>
            <button>Get a free quote</button>
          </div>

          <div className={style.BtnInfo}>
            <img src={Phone} alt="" />
            <div className={style.test}>
              <p>Call us now</p>
              <a href="#"> (414) 567 - 2109</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={HeaderWrapperImg} alt="" />
      </div>
    </div>
  );
};

export default HeaderWrapper;
