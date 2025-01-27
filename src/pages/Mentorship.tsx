import React, { useState } from 'react';
import { Search, Star, Clock, BookOpen, GraduationCap, MapPin, Calendar } from 'lucide-react';

interface Mentor {
  id: number;
  name: string;
  title: string;
  specialization: string[];
  experience: string;
  rating: number;
  reviewCount: number;
  hourlyRate: string;
  availability: string;
  location: string;
  bio: string;
  education: string;
  avatar: string;
  languages: string[];
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Dr. James Anderson",
    title: "Senior Mathematics Professor",
    specialization: ["Calculus", "Linear Algebra", "Statistics"],
    experience: "15+ years",
    rating: 4.9,
    reviewCount: 328,
    hourlyRate: "$75/hour",
    availability: "Weekdays & Weekends",
    location: "London, UK",
    bio: "Former Cambridge University professor specializing in advanced mathematics. Experienced in preparing students for university admissions and international competitions.",
    education: "Ph.D. in Mathematics, Cambridge University",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    languages: ["English", "French"]
  },
  {
    id: 2,
    name: "Prof. Maria Garcia",
    title: "IELTS Examiner & Language Expert",
    specialization: ["IELTS", "Academic Writing", "English Literature"],
    experience: "12 years",
    rating: 4.8,
    reviewCount: 245,
    hourlyRate: "$65/hour",
    availability: "Weekdays",
    location: "Remote",
    bio: "Certified IELTS examiner with extensive experience in preparing students for academic English examinations. Specializes in writing and speaking skills.",
    education: "M.A. in Applied Linguistics, Oxford University",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    languages: ["English", "Spanish"]
  },
  {
    id: 3,
    name: "Dr. Alex Chen",
    title: "Computer Science Mentor",
    specialization: ["Algorithms", "Data Structures", "Machine Learning"],
    experience: "10 years",
    rating: 4.9,
    reviewCount: 189,
    hourlyRate: "$85/hour",
    availability: "Flexible Hours",
    location: "Remote",
    bio: "Tech industry veteran with experience at top companies. Passionate about helping students master computer science concepts and prepare for technical interviews.",
    education: "Ph.D. in Computer Science, Stanford University",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    languages: ["English", "Mandarin"]
  }
];

const Mentorship = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.specialization.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSpecialization = selectedSpecialization === 'all' || 
                                 mentor.specialization.includes(selectedSpecialization);
    const matchesLocation = selectedLocation === 'all' || mentor.location === selectedLocation;
    return matchesSearch && matchesSpecialization && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Mentor</h1>
          <p className="text-gray-600">Connect with experienced mentors who can guide you towards your academic goals</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by name or specialization"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
              >
                <option value="all">All Specializations</option>
                <option value="Calculus">Mathematics</option>
                <option value="IELTS">Language</option>
                <option value="Algorithms">Computer Science</option>
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="all">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="London, UK">London</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map(mentor => (
            <div key={mentor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{mentor.name}</h2>
                    <p className="text-gray-600">{mentor.title}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="ml-1 text-gray-700">{mentor.rating}</span>
                  </div>
                  <span className="text-gray-500">({mentor.reviewCount} reviews)</span>
                </div>

                <p className="text-gray-700 mb-4">{mentor.bio}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="h-5 w-5 mr-2 text-blue-500" />
                    <span>{mentor.education}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-blue-500" />
                    <span>{mentor.experience} experience</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                    <span>{mentor.availability}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                    <span>{mentor.location}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Specializations:</h3>
                  <div className="flex flex-wrap gap-2">
                    {mentor.specialization.map((spec, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Languages:</h3>
                  <div className="flex flex-wrap gap-2">
                    {mentor.languages.map((lang, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold text-gray-900">{mentor.hourlyRate}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentorship;