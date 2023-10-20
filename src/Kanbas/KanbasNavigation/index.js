import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { TfiDashboard } from "react-icons/tfi";
import { BiBook } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { RiOrganizationChart } from "react-icons/ri";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import "./index.css";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <TfiDashboard className="wd-icon" />,
    Courses: <BiBook className="wd-icon" />,
    Calendar: <FaRegCalendarAlt className="wd-icon" />,
    Inbox: <IoFileTrayFullOutline className="wd-icon" />,
    History: <AiOutlineClockCircle className="wd-icon" />,
    Studio: <RiOrganizationChart className="wd-icon" />,
    Commons: <FaArrowRightFromBracket className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
