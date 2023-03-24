import { FaTelegramPlane } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

import Logo from "../../assets/heroImg/logo.svg";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_main">
          <div className="footer_info">
            <div className="footer_infoItems">
              <h1 className="footer_info_items_title">Aloqa</h1>
              <div className="footer_infoItem">
                <p className="footer_infoItem_title">Manzil:</p>
                <p className="footer_infoItem_p">
                  Namangan viloyati, Namangan shahri Islom Karimov ko'chasi 4 -
                  B uy.
                </p>
              </div>
              <div className="footer_infoItem">
                <p className="footer_infoItem_title">Murojat uchun tel:</p>
                <a href="tel:+998941723343" className="footer_infoItem_p">
                  +998(94) 172-33-43
                </a>
              </div>
              <div className="footer_infoItem">
                <p className="footer_infoItem_title">Email:</p>
                <a
                  href="mailto:blackcoders@gmail.com"
                  className="footer_infoItem_p"
                >
                  blackcoders@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="footer_logo">
            <img src={Logo} alt="" className="footerImg" />
          </div>
        </div>
      </div>
      <div className="footer_btm container">
        <div className="footer_hr"></div>
        <div className="footer_btm_main">
          <div className="footer_btmInfo">
            <p>©CopyRight by </p>
            <p className="logoText">Black Coders</p>
            <p>Team - 2021 Sept 21</p>
          </div>
          <div className="footer_btmLink">
            <a href="https://t.me/Javascpript_starc98">
              <p className="footer_icon telegram">
                <FaTelegramPlane />
              </p>
            </a>
            <a href="https://www.facebook.com/arabjon">
              <p className="footer_icon facebook">
                <RiFacebookBoxFill />
              </p>
            </a>
            <a href="https://intagram/ali">
              <p className="footer_icon instagram">
                <BsInstagram />
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
