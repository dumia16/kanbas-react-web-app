import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
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
  );
}
export default Kanbas;
