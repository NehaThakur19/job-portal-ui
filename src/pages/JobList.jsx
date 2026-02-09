import { useState } from 'react';
import { Link } from 'react-router-dom';
import jobs from '../data/jobs.json';

export default function JobList() {
  const [search, setSearch] = useState('');
  
  // Filter jobs based on search
  let filteredJobs = jobs;
  if (search) {
    filteredJobs = jobs.filter(job => {
      return job.title.toLowerCase().includes(search.toLowerCase()) || 
             job.company.toLowerCase().includes(search.toLowerCase()) ||
             job.location.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Available Jobs
          </h1>
          <p className="text-gray-600">
            Find your next career opportunity
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
          />
        </div>

        {/* Job Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredJobs.length} jobs
          </p>
        </div>

        {/* Jobs List - Multiple Columns */}
        <div className="flex flex-wrap -mx-3">
          {filteredJobs.map(job => (
            <div 
              key={job.id}
              className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow h-full">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h3>

                {/* Company */}
                <p className="text-gray-700 font-medium mb-2">
                  {job.company}
                </p>

                {/* Type */}
                <p className="text-gray-500 text-sm mb-1">
                  Type: {job.type}
                </p>

                {/* Location */}
                <p className="text-gray-500 text-sm mb-4">
                  Location: {job.location}
                </p>

                {/* Skills */}
                <p className="text-gray-600 text-sm mb-4">
                  Skills: {job.skills.slice(0, 3).join(', ')}
                  {job.skills.length > 3 && ` +${job.skills.length - 3} more`}
                </p>

                {/* View Details Button */}
                <Link
                  to={`/${job.id}`}
                  className="block w-full py-2 bg-blue-600 text-white text-center rounded-md font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No jobs found matching your search.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
