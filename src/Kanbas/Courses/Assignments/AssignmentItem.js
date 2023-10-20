import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { RxDragHandleDots2 } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import "./index.css";

function AssignmentItem({ assignment, courseId }) {
  return (
    <Link
      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
      className="list-group-item"
    >
      <div className="assignment-item">
        <div className="assignment-title">
          <RxDragHandleDots2 />
          <TfiWrite className="write-icon" />
          {assignment.title}
        </div>
        <div className="assignment-details">
          <div className="assignment-due-date">Due Sep 18 at 11:59pm</div>
          <div className="assignment-points">
            {assignment.points || 100} pts
          </div>
          <FaCheckCircle className="check-icon" />
        </div>
      </div>
    </Link>
  );
}

export default AssignmentItem;
