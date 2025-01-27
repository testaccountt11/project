import { useState } from 'react';

const Dashboard = () => {
  const handleInternshipClick = () => {
    // Add navigation or action for internships
    console.log('Internships clicked');
  };

  const handleCompetitionClick = () => {
    // Add navigation or action for competitions
    console.log('Competitions clicked');
  };

  const handleCoursesClick = () => {
    // Add navigation or action for courses
    console.log('Courses clicked');
  };

  const handleMentorshipClick = () => {
    // Add navigation or action for mentorship
    console.log('Mentorship clicked');
  };

  const handleProfileClick = () => {
    // Add navigation or action for profile
    console.log('Profile clicked');
  };

  const handleAnalyticsClick = () => {
    // Add navigation or action for analytics
    console.log('Analytics clicked');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => console.log('Notifications clicked')}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <i className="fas fa-bell mr-2"></i>
            Notifications
          </button>
          <button 
            onClick={() => console.log('Settings clicked')}
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <i className="fas fa-cog"></i>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleInternshipClick}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">My Internships</h2>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">3 Active</span>
          </div>
          <p className="text-gray-600 mb-4">Track your internship applications and status</p>
          <button className="text-blue-500 hover:text-blue-600">View Applications →</button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleCompetitionClick}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">My Competitions</h2>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">2 Upcoming</span>
          </div>
          <p className="text-gray-600 mb-4">View your registered competitions</p>
          <button className="text-blue-500 hover:text-blue-600">View Competitions →</button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleCoursesClick}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">My Courses</h2>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">4 In Progress</span>
          </div>
          <p className="text-gray-600 mb-4">Access your enrolled courses</p>
          <button className="text-blue-500 hover:text-blue-600">View Courses →</button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleMentorshipClick}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Mentorship Sessions</h2>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">Next: Today</span>
          </div>
          <p className="text-gray-600 mb-4">Manage your mentorship appointments</p>
          <button className="text-blue-500 hover:text-blue-600">Schedule Session →</button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleProfileClick}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Profile Settings</h2>
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">80% Complete</span>
          </div>
          <p className="text-gray-600 mb-4">Update your personal information</p>
          <button className="text-blue-500 hover:text-blue-600">Edit Profile →</button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleAnalyticsClick}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Analytics</h2>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">New Insights</span>
          </div>
          <p className="text-gray-600 mb-4">Track your progress and performance</p>
          <button className="text-blue-500 hover:text-blue-600">View Analytics →</button>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex space-x-4">
          <button 
            onClick={() => console.log('Apply for Internship clicked')}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Apply for Internship
          </button>
          <button 
            onClick={() => console.log('Join Competition clicked')}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Join Competition
          </button>
          <button 
            onClick={() => console.log('Book Mentorship clicked')}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
            Book Mentorship
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;