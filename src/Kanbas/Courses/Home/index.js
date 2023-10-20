import ModuleList from "../Modules/ModuleList";
import { FaPlus, FaEllipsisV } from "react-icons/fa";
import "./index.css";
import Sidebar from "./sidebar";
import "./sidebar.css";
import Button from "./button";

function Home() {
  return (
    <div>
      <Button />
      <div className="row">
        <div className="col-10">
          <hr />
          <ModuleList />
        </div>
        <div className="col-2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
export default Home;
