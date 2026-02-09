import { useParams, Link } from 'react-router-dom';
import jobs from '../data/jobs.json';

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return (
      <div>
        <h1 className="text-3xl font-bold">Job Not Found</h1>
        <Link to="/" className="text-blue-500 underline">
          Back to Job Lists
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Job Detail</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{job.title}</h2>
        <p>Company: {job.company}</p>
        <p>Location: {job.location}</p>
      </div>
      <Link to="/" className="text-blue-500 underline">
        Back to Job Lists
      </Link>
    </div>
  );
}
