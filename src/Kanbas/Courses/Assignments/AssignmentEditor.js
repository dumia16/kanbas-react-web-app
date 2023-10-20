import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import "./index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="edit-header">Assignment Name</h5>
        <div className="d-flex justify-content-between align-items-center">
          <FaCheckCircle className="text-success me-2" />
          <h6>Published</h6>
          <button className="btn btn-light">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />
      <input value={assignment.title} className="form-control mb-3" />

      <div className="d-flex justify-content-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-light me-2"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
      <hr />
    </div>
  );
}

export default AssignmentEditor;
