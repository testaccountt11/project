import React, { useState } from 'react';
import { Search, Filter, MapPin, Building, Clock, ArrowRight } from 'lucide-react';

interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  description: string;
  requirements: string[];
  postedDate: string;
  logo: string;
}

const internshipsPage1: Internship[] = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    duration: "3 months",
    description: "Join our engineering team and work on cutting-edge web applications using modern technologies.",
    requirements: ["JavaScript", "React", "Node.js", "Currently enrolled in CS program"],
    postedDate: "2 days ago",
    logo: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80"
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Analytics Pro",
    location: "Remote",
    type: "Part-time",
    duration: "6 months",
    description: "Help us analyze large datasets and build machine learning models for predictive analytics.",
    requirements: ["Python", "SQL", "Statistics", "Machine Learning basics"],
    postedDate: "1 week ago",
    logo: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80"
  },
  {
    id: 3,
    title: "UX Design Intern",
    company: "Creative Design Co",
    location: "New York, NY",
    type: "Full-time",
    duration: "4 months",
    description: "Work with our design team to create beautiful and intuitive user interfaces.",
    requirements: ["Figma", "UI/UX principles", "Portfolio", "Design degree pursuit"],
    postedDate: "3 days ago",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80"
  }
];

const internshipsPage2: Internship[] = [
  {
    id: 4,
    title: "Marketing Intern",
    company: "Growth Marketing Inc",
    location: "Chicago, IL",
    type: "Part-time",
    duration: "4 months",
    description: "Assist in developing and implementing digital marketing strategies across various platforms.",
    requirements: ["Social Media Marketing", "Content Creation", "Analytics", "Marketing major"],
    postedDate: "5 days ago",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80"
  },
  {
    id: 5,
    title: "Mobile App Development Intern",
    company: "AppTech Solutions",
    location: "Austin, TX",
    type: "Full-time",
    duration: "6 months",
    description: "Develop mobile applications for iOS and Android platforms using React Native.",
    requirements: ["React Native", "JavaScript", "Mobile Development", "Git"],
    postedDate: "1 day ago",
    logo: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80"
  },
  {
    id: 6,
    title: "Cloud Engineering Intern",
    company: "CloudScale Systems",
    location: "Seattle, WA",
    type: "Full-time",
    duration: "5 months",
    description: "Work with our cloud infrastructure team on AWS and Azure platforms.",
    requirements: ["AWS", "Azure", "Linux", "Python", "Network fundamentals"],
    postedDate: "4 days ago",
    logo: "https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80"
  },
  {
    id: 7,
    title: "Cybersecurity Intern",
    company: "SecureNet Defense",
    location: "Boston, MA",
    type: "Full-time",
    duration: "4 months",
    description: "Join our security team to help protect systems and networks from cyber threats.",
    requirements: ["Network Security", "Python", "Linux", "Security fundamentals"],
    postedDate: "2 days ago",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80"
  },
  {
    id: 8,
    title: "Product Management Intern",
    company: "ProductLabs",
    location: "Remote",
    type: "Part-time",
    duration: "3 months",
    description: "Work with product teams to define requirements and drive product development.",
    requirements: ["Agile methodology", "Data analysis", "Communication skills", "Business background"],
    postedDate: "1 week ago",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80"
  },
  {
    id: 9,
    title: "AI Research Intern",
    company: "AI Innovations",
    location: "San Jose, CA",
    type: "Full-time",
    duration: "6 months",
    description: "Conduct research in artificial intelligence and machine learning applications.",
    requirements: ["Machine Learning", "Deep Learning", "Python", "Research experience"],
    postedDate: "3 days ago",
    logo: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80"
  }
];

const Internships = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const currentInternships = currentPage === 1 ? internshipsPage1 : internshipsPage2;

  const filteredInternships = currentInternships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || internship.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || internship.location === selectedLocation;
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Internship</h1>
          <p className="text-gray-600">Discover internship opportunities that match your skills and interests</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by title or company"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="all">All Locations</option>
                <option value="San Francisco, CA">San Francisco</option>
                <option value="New York, NY">New York</option>
                <option value="Remote">Remote</option>
                <option value="Chicago, IL">Chicago</option>
                <option value="Austin, TX">Austin</option>
                <option value="Seattle, WA">Seattle</option>
                <option value="Boston, MA">Boston</option>
                <option value="San Jose, CA">San Jose</option>
              </select>
            </div>
          </div>
        </div>

        {/* Page Indicator */}
        <div className="text-center mb-4">
          <span className="text-gray-600">Page {currentPage} of 2</span>
        </div>

        {/* Internship Listings */}
        <div className="space-y-4">
          {filteredInternships.map(internship => (
            <div key={internship.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <img
                  src={internship.logo}
                  alt={internship.company}
                  className="w-16 h-16 rounded-lg object-cover mr-6"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{internship.title}</h2>
                      <div className="flex items-center mt-1 space-x-4">
                        <span className="flex items-center text-gray-600">
                          <Building className="h-4 w-4 mr-1" />
                          {internship.company}
                        </span>
                        <span className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          {internship.location}
                        </span>
                        <span className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {internship.duration}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {internship.type}
                    </span>
                  </div>
                  
                  <p className="mt-4 text-gray-600">{internship.description}</p>
                  
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-gray-900">Requirements:</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {internship.requirements.map((req, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Posted {internship.postedDate}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          {currentPage > 1 && (
            <button 
              onClick={() => setCurrentPage(1)}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Previous Page
            </button>
          )}
          {currentPage < 2 && (
            <button 
              onClick={() => setCurrentPage(2)}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Next Page
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Internships;