import ModuleList from "./ModuleList";
import { FaPlus, FaEllipsisV } from "react-icons/fa";
import "./index.css";

function Modules() {
  return (
    <div>
      <br />
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
      <br />
      <hr />
      <ModuleList />
    </div>
  );
}
export default Modules;
