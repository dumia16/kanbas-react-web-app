import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <hr />
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
                <h5 className="card-title">{course.name}</h5>
                <p className="card-number">{course.number}</p>
                <p className="card-dates">
                  {course.startDate} - {course.endDate}
                </p>

                <Link
                  to={`/Kanbas/Courses/${course._id}`}
                  className="course-link"
                >
                  {course.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
