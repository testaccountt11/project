import React, { useState } from 'react';
import { Search, BookOpen, Clock, Star, Users, GraduationCap } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  level: string;
  duration: string;
  rating: number;
  studentsCount: number;
  description: string;
  topics: string[];
  image: string;
  price: string;
  category: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "IELTS Academic Preparation",
    instructor: "Dr. Sarah Williams",
    level: "Intermediate",
    duration: "12 weeks",
    rating: 4.8,
    studentsCount: 15000,
    description: "Comprehensive IELTS preparation course covering all exam sections: Reading, Writing, Listening, and Speaking. Includes practice tests and personalized feedback.",
    topics: ["Reading Strategies", "Academic Writing", "Speaking Skills", "Listening Practice"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$299",
    category: "Language"
  },
  {
    id: 2,
    title: "SAT Math Advanced",
    instructor: "Prof. Michael Chen",
    level: "Advanced",
    duration: "8 weeks",
    rating: 4.9,
    studentsCount: 12000,
    description: "Master advanced mathematics concepts for the SAT. Includes problem-solving strategies, practice questions, and detailed explanations.",
    topics: ["Algebra", "Geometry", "Trigonometry", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$249",
    category: "Mathematics"
  },
  {
    id: 3,
    title: "GRE Complete Preparation",
    instructor: "Dr. Emily Rodriguez",
    level: "All Levels",
    duration: "16 weeks",
    rating: 4.7,
    studentsCount: 8000,
    description: "Complete GRE preparation covering Verbal, Quantitative, and Analytical Writing sections. Includes full-length practice tests and personalized study plans.",
    topics: ["Verbal Reasoning", "Quantitative Analysis", "Essay Writing", "Test Strategies"],
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$399",
    category: "Test Prep"
  }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Academic Courses</h1>
          <p className="text-gray-600">Prepare for international exams and advance your academic journey</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search courses"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="all">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="All Levels">All Levels</option>
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="Language">Language</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Test Prep">Test Prep</option>
              </select>
            </div>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">{course.title}</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {course.level}
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80"
                    alt={course.instructor}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-gray-600">{course.instructor}</span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-blue-500" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {course.rating}
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-green-500" />
                    {course.studentsCount.toLocaleString()} students
                  </span>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Topics Covered:</h3>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Enroll Now
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

export default Courses;