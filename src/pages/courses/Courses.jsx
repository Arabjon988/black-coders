import { Link } from "react-router-dom";

import CoursesData from "../../data/CoursesData";

import courseImg from "../../assets/aboutCourse/aboutCourseImg/courseHero.svg";
import "./course.css";

const Courses = () => {
  return (
    <>
      <div className="course_hero">
        <div className="container">
          <div className="course_hero_main">
            <div className="course_hero_info">
              <h1 className="course_hero_title">
                O`quv markazidagi barcha kurslar
              </h1>
              <Link to="/about">
                <button className="detail">Ba'tafsil</button>
              </Link>
            </div>
            <div className="course_hero_img">
              <img src={courseImg} alt="" className="course_hero_logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="course_items">
        <div className="container">
          <div className="course_items_main">
            <div className="course_main_items">
                {
                  CoursesData?.map((item) => (
                    <div className="course_item" key={item.id}>
                        <h2 className="course_item_title">{item.title}</h2>
                        <h4 className="course_item_parts">Kurs qismlari</h4>
                        <div className="course_item_part"> 
                          {
                          item?.parts.map((course) =>(
                            <p className="course_item_part_item">{course}</p>
                          ))
                        }
                        </div>
                        <span course_item_during_price>{item.price}</span>
                        <br />
                        <span className="course_item_during">{item.month} - OY</span>
                        <br />
                        <button className="detail">Buy Course</button>
                    </div>
                  ))
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
