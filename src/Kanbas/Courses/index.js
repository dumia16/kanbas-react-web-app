import React from "react";
import { useParams, Routes, Route, useLocation } from "react-router-dom";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { BsList } from "react-icons/bs";
import "./index.css";
import { AiOutlineRight } from "react-icons/ai";
import { BiGlassesAlt } from "react-icons/bi";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <div className="header d-flex justify-content-between align-items-center">
        <h5>
          <BsList className="icon" />
          <span>
            {course._id} {course.name}{" "}
          </span>
          <AiOutlineRight className="icon-down" /> {screen}
        </h5>
        <button className="btn btn-light view-button flex-end">
          <BiGlassesAlt /> Student View
        </button>
      </div>

      <p>202410_1 Fall 2023 Semest...</p>

      <CourseNavigation />
      <br />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Assignments />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
