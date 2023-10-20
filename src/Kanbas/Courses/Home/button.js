import "./index.css";
import { FaPlus, FaEllipsisV } from "react-icons/fa";

function Button() {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-light">
        Collapse All
      </button>
      <button type="button" className="btn btn-light">
        View Progress
      </button>
      <button type="button" className="btn btn-light">
        Publish All
      </button>
      <button type="button" className="btn btn-danger">
        <FaPlus /> Module
      </button>
      <button type="button" className="btn btn-light">
        <FaEllipsisV />
      </button>
    </div>
  );
}

export default Button;
