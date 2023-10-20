import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import AssignmentItem from "./AssignmentItem";
import AssignHeader from "./AssignHeader";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <AssignHeader />
      <hr />
      <div className="assignment-container">
        <div>
          <h2>
            Assignments for course {courseId}{" "}
            <button className="button-total">40% of Total</button>
          </h2>
        </div>
        <div className="list-group">
          {courseAssignments.map((assignment) => (
            <AssignmentItem
              key={assignment._id}
              assignment={assignment}
              courseId={courseId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;
