import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Login from "../auth/login/Login";
import Courses from "../pages/courses/Courses";
import NoMatch from "../pages/NoMatch/NoMatch";

// import components
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import CourseForm from "../pages/CourseForm/CourseForm";

function AllRoutes() {
  const auth = localStorage.getItem("AUTH");
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {auth ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-course" element={<Courses />} />
            <Route path="/about-course/course-form" element={<CourseForm />} />
          </>
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AllRoutes;
