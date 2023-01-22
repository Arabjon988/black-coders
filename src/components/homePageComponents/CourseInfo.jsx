import {Link} from 'react-router-dom'


// import img for course img
import FrontendImg from "../../assets/coursesImg/frontend.jpg";
import BackendImg from "../../assets/coursesImg/backend.jpg";
import TgBotImg from "../../assets/coursesImg/bot.jpg";

// import icons
import { SiPython } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { VscHubot } from "react-icons/vsc";

// impoer css file
import "./courseInfo.css";

const CourseInfo = () => {
  return (
    <div className="our_goal">
      <div className="container">
        <div className="goal_main">
          <div className="goal_main_top">
            <div className="goal_main_top_info">
              <h1 className="goal_main_top_h1">Asosiy Maqsadimiz</h1>
              <p className="goal_main_top_text">
                Bizni o`quv markazimiz o`z o`quvchilarini hech qanday oliy o`quv
                yurtlariga yo`naltirmaydi. Biz o`z o`quvchilarimizga IT sohasida
                yetuk mutahasis qilib tarbiyalaymiz. Biz ularning kelajaklari
                haqida qayg`uramiz!
              </p>
            </div>
            <div className="goal_main_top_items">
              <Link to="/about">
                <div className="goal_main_top_item">
                  <GrReactjs className="goal_main_top_item_icon" />
                  <h1 className="goal_main_top_item_title">Front end</h1>
                  <p>
                    Bu yo'nalishda biz sizga web dasturlashning front end
                    yo'nalishi bo'yicha React Js ga asoslangan mashg'ulotlarni
                    taklif etamiz va siz bu yo'nalish orqali ishlay olasiz.
                  </p>
                </div>
              </Link>
              <Link to="/about">
                <div className="goal_main_top_item">
                  <SiPython className="goal_main_top_item_icon" />
                  <h1 className="goal_main_top_item_title">Back end</h1>
                  <p>
                    Bu yo'nalishda biz sizga web dasturlashning back end
                    yo'nalishi bo'yicha Python va Django ga asoslangan
                    mashg'ulotlarni taklif etamiz va siz bu yo'nalish orqali
                    ishlay olasiz.
                  </p>
                </div>
              </Link>
              <Link to="/about">
                <div className="goal_main_top_item">
                  <VscHubot className="goal_main_top_item_icon" />
                  <h1 className="goal_main_top_item_title">Telegram Bot</h1>
                  <p>
                    Bu yo'nalishda biz sizga har qanday turdagi telegram
                    botlarini qila oladigan darajada bilimga ega bo'lasiz va o'z
                    biznesingizni telegramda boshlaysiz.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="goal_main_course_items">
            <div className="goal_main_course_item">
              <div className="goal_main_course_item_info">
                <p className="goal_main_course_item_title">FRONT END</p>
                <p className="goal_main_course_item_detail">
                  Hozirgi kunda eng daromadli dasturlash sohalaridan biri
                  bo`lgan <b> Front end </b>
                  dasturlash bo`yicha siz qisqa muddat ichida muvaqqiyatga
                  erishishingiz mumkin.
                </p>
              </div>
              <div className="goal_main_course_item_img">
                <img
                  src={FrontendImg}
                  alt="Frontend img"
                  className="goal_main_course_item_logo"
                />
              </div>
            </div>
            <div className="goal_main_course_item">
              <div className="goal_main_course_item_img">
                <img
                  src={BackendImg}
                  alt="Back end img"
                  className="goal_main_course_item_logo"
                />
              </div>
              <div className="goal_main_course_item_info">
                <p className="goal_main_course_item_title">BACK END</p>
                <p className="goal_main_course_item_detail">
                  Hozirgi kunda eng daromadli dasturlash sohalaridan biri
                  bo`lgan <b>Back end </b> dasturlash bo`yicha siz qisqa muddat
                  ichida muvaqqiyatga erishishingiz mumkin.
                </p>
              </div>
            </div>
            <div className="goal_main_course_item">
              <div className="goal_main_course_item_info">
                <p className="goal_main_course_item_title">TELEGRAM BOT</p>
                <p className="goal_main_course_item_detail">
                  Hozirgi kunda eng daromadli dasturlash sohalaridan biri
                  bo`lgan <b>Telegram Bot </b> dasturlash bo`yicha siz qisqa
                  muddat ichida muvaqqiyatga erishishingiz mumkin.
                </p>
              </div>
              <div className="goal_main_course_item_img">
                <img
                  src={TgBotImg}
                  alt="Telegram bot img"
                  className="goal_main_course_item_logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
