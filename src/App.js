import DashBoard from "./pages/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/Sidebar";
function App() {
  return (
    <Router>
      <div style={{ display: "flex", backgroundColor: "#F2F2F2" }}>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<DashBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
