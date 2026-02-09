import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import jobs from '../data/jobs.json';

export default function JobDetail() {
  const { id } = useParams();
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Find the job
  const job = jobs.find(j => j.id === id);

  // Handle apply button
  const handleApply = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  // If job not found
  if (!job) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-6">The job you are looking for does not exist.</p>
          <Link 
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mb-6 text-gray-600 hover:text-blue-600 transition-colors"
        >
          &larr; Back to Jobs
        </Link>

        {/* Job Card */}
        <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              {job.title}
            </h1>
            <p className="text-xl text-blue-100">
              {job.company}
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Type and Location */}
            <div className="mb-8">
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Type:</span> {job.type}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Location:</span> {job.location}
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Job Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Required Skills
              </h2>
              <p className="text-gray-600">
                {job.skills.join(', ')}
              </p>
            </div>

            {/* Apply Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={handleApply}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg">
          Application submitted successfully!
        </div>
      )}
    </div>
  );
}
