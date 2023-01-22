// import link router
import { Link } from "react-router-dom";

// import icons
import{FaTelegramPlane} from 'react-icons/fa'
import{RiFacebookBoxFill} from 'react-icons/ri'
import{BsInstagram} from 'react-icons/bs'

// import contact main img
import contactMainImg from '../../assets/contactPages/contactHeroImg/contactHeroImg.svg'

// import contact map img 
import contactMapImg from '../../assets/contactPages/map.png'

// import css file
import './contact.css'

const Contact = () => {
  return (
    <>
     <div className="contact_hero">
        <div className="container">
          <div className="contact_hero_main">
            <div className="contact_hero_info">
              <h1 className="contact_hero_title">
                O`quv markazidagi barcha kurslar
              </h1>
              <Link to="/about">
                <button className="detail">Ba'tafsil</button>
              </Link>
            </div>
            <div className="contact_hero_img">
              <img src={contactMainImg} alt="" className="contact_hero_logo" />
            </div>
          </div>
        </div>
      </div>
    <div className="contact_main">
        <div className="container">
          <div className="contact_main_top">
            <h1 className="contact_main_top_title">
              Biz bilan bog`lanish
            </h1>
            <p className="contact_main_top_p">
              Black Coders Team o`quv markazida o`qing va o`z kasbingizni toping. Ish vaqti: 9:00 - 22:00 . Yakshanba dam olish kuni. Ish vaqtining istalgan soatida xaritada ko`rsailgan manzilga kelishingiz mumkin. O`quv markaz haqida ma`lumot olish yoki markaz haqidagi istalgan savollaringizni Operatordan so`rashingiz mumkin. +998(94) 172-33-43
            </p>
          </div>
          <div className="contact_main_links">
            <div className="contact_main_links_left">
              <h3 className="contact_main_links_left_title">
                Ijtimoiy tarmoqlardagi manzillarimiz:
              </h3>
              <p className="contact_main_links_left_item">
                <FaTelegramPlane className="contact_main_links_left_item_icon" />
               <span>Telegram: @black_coders_developers</span>
              </p>
              <p className="contact_main_links_left_item">
              <FaTelegramPlane className="contact_main_links_left_item_icon" />
                <span>Telegram: @coders_admin</span>
              </p>
              <p className="contact_main_links_left_item">
              <RiFacebookBoxFill className="contact_main_links_left_item_icon" />
                <span>Facebook: @black_coders_namangan</span>
              </p>
              <p className="contact_main_links_left_item">
               <BsInstagram className="contact_main_links_left_item_icon"  />
                <span>Instagram:@black_coders_namangan</span>
              </p>
            </div>
            <div className="contact_main_links_right">
              <div className="contact_main_links_right_map">
                <img src={contactMapImg} alt="contact main map" className="contact_main_links_right_map_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact