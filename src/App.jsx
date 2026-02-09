import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import JobList from "./pages/JobList";
import JobDetail from "./pages/JobDetail";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/:id" element={<JobDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
