import { useRef } from "react";

import emailjs from "@emailjs/browser";

import "./courseForm.css";

const CourseForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "sservice_btdirpm",
      "template_cvthb7m",
      form.current,
      "80BE89hewOMR84Ynk"
    );
    e.target.reset();
    setTimeout(function timeout() {
        alert("Succesful send to email, Your request!");
    }, 500);
  };
  return (
    <div className="course_form">
      <div className="container">
        <div className="course_form_main">
          <center>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <h1>Kursni tanlab jo'nating</h1>
              <div className="contact__form-div">
                <input
                required
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Insert your name"
                  minLength='6'
                  />
              </div>

              <div className="contact__form-div">
                <input
                  minLength='9'
                required
                  type="number"
                  name="number"
                  className="contact__form-input"
                  placeholder="Insert your number"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <select name="course" id="0" className="select">
                    <option value="python">Python</option>
                    <option value="php">PHP</option>
                    <option value="frontend">Frontend Reactjs</option>
                    <option value="bot">Telegram Bot</option>
                    <option value="design">Grafik dizayn</option>
                    <option value="english">English language</option>
                    <option value="russian">Russian language</option>
                </select>
              </div>
              <button className="course_btn">Send Massage</button>
            </form>
          </center>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
