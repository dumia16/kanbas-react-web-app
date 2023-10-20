import { FaFileImport, FaBell, FaChartLine } from "react-icons/fa";
import { MdLabelImportantOutline } from "react-icons/md";
import { TfiTarget } from "react-icons/tfi";
import { BsBell } from "react-icons/bs";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="btn btn-light w-100 my-2">
        <FaFileImport /> Import Existing Content
      </button>
      <button className="btn btn-light w-100 my-2">
        <MdLabelImportantOutline /> Import from Commons
      </button>
      <button className="btn btn-light w-100 my-2">
        <TfiTarget /> Choose Home Page
      </button>
      <button className="btn btn-light w-100 my-2">
        <FaBell /> View Course Stream
      </button>
      <button className="btn btn-light w-100 my-2">
        <FaChartLine /> New Announcement
      </button>
      <button className="btn btn-light w-100 my-2">
        <FaChartLine /> New Analytics
      </button>
      <button className="btn btn-light w-100 my-2">
        <BsBell /> View Course Notifications
      </button>

      <div className="my-3">
        <h5>To Do</h5>
        <hr />
        <div className="task">
          Grade A1 - ENV + HTML
          <span>100 points • Sep 18 at 11:59pm</span>
        </div>
        <div className="task">
          Grade A2 - CSS + BOOTSTRAP
          <span>100 points • Oct 2 at 11:59pm</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
