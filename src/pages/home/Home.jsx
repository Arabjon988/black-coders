import { Link } from "react-router-dom";
import homeImg from "../../assets/heroImg/hero.svg";
import CourseInfo from "../../components/homePageComponents/CourseInfo";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home_hero">
        <div className="container">
          <div className="home_hero_main">
            <div className="home_hero_info">
              <h1 className="home_hero_title">
                Assalamu alaykum, Black Coders Teamga Xush kelibsiz!
              </h1>
              <Link to="/about">
                <button className="detail">Ba'tafsil</button>
              </Link>
            </div>
            <div className="home_hero_img">
              <img src={homeImg} alt="" className="home_hero_logo" />
            </div>
          </div>
        </div>
      </div>
      
      <CourseInfo />
    </>
  );
};

export default Home;
