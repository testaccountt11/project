import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, BookOpen, Users, User, Info } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <img src="/src/img/logo.svg" alt="Logo" className="h-8" />
            </Link>          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/internships" className="flex items-center text-gray-700 hover:text-blue-600">
              <Award className="h-5 w-5 mr-1" />
              <span>Internships</span>
            </Link>
            <Link to="/competitions" className="flex items-center text-gray-700 hover:text-blue-600">
              <BookOpen className="h-5 w-5 mr-1" />
              <span>Competitions</span>
            </Link>
            <Link to="/courses" className="flex items-center text-gray-700 hover:text-blue-600">
              <GraduationCap className="h-5 w-5 mr-1" />
              <span>Courses</span>
            </Link>
            <Link to="/mentorship" className="flex items-center text-gray-700 hover:text-blue-600">
              <Users className="h-5 w-5 mr-1" />
              <span>Mentorship</span>
            </Link>
            <Link to="/about" className="flex items-center text-gray-700 hover:text-blue-600">
              <Info className="h-5 w-5 mr-1" />
              <span>About</span>
            </Link>
            <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-blue-600">
              <User className="h-5 w-5 mr-1" />
              <span>Dashboard</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;