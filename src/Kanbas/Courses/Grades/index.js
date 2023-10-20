import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaDownload, FaUpload, FaSearch } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
import { FiFilter } from "react-icons/fi";
import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );

  return (
    <div>
      <br />
      <br />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Gradebook</h1>
        <div>
          <button className="btn btn-light mr-2">
            <FaUpload /> Import
          </button>
          <button className="btn btn-light mr-2">
            <FaDownload /> Export
          </button>
          <button className="btn btn-light">
            <LuSettings />
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <div className="input-group w-50">
          <button>
            <FaSearch />
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Search Students"
          />
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            ></button>
            <div className="dropdown-menu"></div>
          </div>
        </div>
        <div className="input-group w-50">
          <button>
            <FaSearch />
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Search Assignments"
          />
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            ></button>
            <div className="dropdown-menu"></div>
          </div>
        </div>
      </div>
      <button className="btn btn-light">
        <FiFilter /> Apply Filters
      </button>
      <br />
      <br />
      <div className="table-responsive">
        <table className="table">
          <thead className="header-text">
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th className="header-text">
                {assignment.title}{" "}
                <div className="text-muted small">Out of 100</div>
              </th>
            ))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td className="header-text username">
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return (
                      <td className="grade-number">{grade?.grade || ""} %</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
