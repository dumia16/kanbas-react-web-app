import { Link } from "react-router-dom";
import "./index.css";
import { React } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <hr />
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <br />
      <button className="btn btn-success" onClick={addNewCourse}>
        Add
      </button>
      <button className="btn btn-primary" onClick={updateCourse}>
        Update
      </button>
      <br />
      <br />
      <h2>Published Courses ({courses.length})</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course, index) => (
          <div key={course._id} className="col">
            <div className="card h-100">
              <img
                src="./Images/red.jpg"
                className="card-img-top"
                alt={course.name}
              />
              <div className="card-body">
                <h4 style={{ fontWeight: "bold" }} className="card-title">
                  {course.name}
                </h4>
                <button className="btn btn-primary">
                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {course.name}
                  </Link>
                </button>
                <br />
                <br />
                <button
                  className="btn btn-warning"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </button>
                <br />
                <br />
                <p className="card-number">{course.number}</p>
                <p className="card-dates">
                  {course.startDate} - {course.endDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
