import { Link } from 'react-router-dom';
import myPicture from '../assets/my-picture.png';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Website Name - Left Side */}
          <Link 
            to="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-800"
          >
            JobPortal
          </Link>
          
          {/* User Info - Right Side */}
          <div className="flex items-center">
            <span className="text-gray-900 font-medium mr-3">Neha Thakur</span>
            <img 
              src={myPicture} 
              alt="Neha Thakur" 
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
