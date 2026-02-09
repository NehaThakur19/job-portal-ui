import { Link } from 'react-router-dom';
import jobs from '../data/jobs.json';

export default function JobList() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Job Lists</h1>
      <ul className="space-y-2">
        {jobs.map(job => (
          <li key={job.id}>
            <Link 
              to={`/${job.id}`} 
              className="text-blue-500 underline hover:text-blue-700"
            >
              {job.title} at {job.company}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
