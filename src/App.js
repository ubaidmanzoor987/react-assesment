import DashBoard from "./pages/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/Sidebar";
import { useState } from "react";
function App() {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <Router>
      <div className="d-flex background">
        <SideBar toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <DashBoard
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
