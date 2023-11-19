import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  // const URL = "http://localhost:4000/api/courses";

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  const updateCourse = async () => {
    const response = await axios.put(`${COURSES_URL}/${course._id}`, course);
    if (response.status !== 204) {
      console.log("error");
      return;
    } else {
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          }
          return c;
        })
      );
    }
    // setCourse({ name: "" });
  };

  // const addNewCourse = () => {
  //   setCourses([
  //     ...courses,
  //     { ...course, _id: new Date().getTime().toString() },
  //   ]);
  // };

  const addNewCourse = async () => {
    const response = await axios.post(COURSES_URL, course);
    // console.log(response.data);
    setCourses([...courses, response.data]);
    // setCourse({ name: "" });
  };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  const deleteCourse = async (course_id) => {
    await axios.delete(`${COURSES_URL}/${course_id}`);
    setCourses(courses.filter((c) => c._id !== course_id));
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account />} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
            <Route
              path="Courses"
              element={<Navigate to="/Kanbas/Courses/RS101" />}
            />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />
            <Route path="Inbox" element={<h1>History</h1>} />
            <Route path="Inbox" element={<h1>Studio</h1>} />
            <Route path="Inbox" element={<h1>Commons</h1>} />
            <Route path="Inbox" element={<h1>Help</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
