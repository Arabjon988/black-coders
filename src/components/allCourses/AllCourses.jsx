import { Link } from "react-router-dom";
import courseImg from "../../assets/aboutCourse/aboutCourseImg/courseHero.svg";
import "./allCourses.css";

import coursesData from "../../data/CoursesData";

const AllCourses = () => {


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
            <h1 className="course_items_main_title">Barcha Kurslar</h1>
            <div className="course_main_items">
              {coursesData?.map((item) => (
                <div className="course_item" key={item.id}>
                  <h2 className="course_item_title">{item.title}</h2>
                  <p className="course_item_parts_title">Kurs qismlari</p>
                  <div className="course_item_part">
                    {item?.parts.map((course) => (
                      <p className="course_item_part_item">{course}</p>
                    ))}
                  </div>
                  <p className="course_item_during">{item.month} - OY</p>
                  <center>
                    <p className="course_item_price">{item.price} so'm</p>
                  </center>
                  <Link to="/about-course/course-form">
                    <button className="course_item_btn">Buy Course</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCourses;
