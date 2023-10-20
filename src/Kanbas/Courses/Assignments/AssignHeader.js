import React from "react";
import { FiMoreVertical } from "react-icons/fi";

function AssignHeader() {
  return (
    <div className="assignment-toolbar d-flex justify-content-between align-items-center">
      <input
        type="text"
        className="form-control"
        placeholder="Search for Assignment"
      />
      <div>
        <button className="btn btn-light mx-1">+ Group</button>
        <button className="btn btn-danger mx-1">+ Assignment</button>
        <button className="btn btn-light mx-1">
          <FiMoreVertical size={20} />
        </button>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}

export default AssignHeader;
