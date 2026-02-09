import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import JobList from "./pages/JobList";
import JobDetail from "./pages/JobDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/:id" element={<JobDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
