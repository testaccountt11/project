import React, { useState } from 'react';
import { Search, Trophy, Calendar, Users, Globe } from 'lucide-react';

interface Competition {
  id: number;
  title: string;
  organizer: string;
  type: string;
  deadline: string;
  participantsCount: number;
  prizePool: string;
  description: string;
  requirements: string[];
  image: string;
  location: string;
}

const competitions: Competition[] = [
  {
    id: 1,
    title: "Global Innovation Challenge 2024",
    organizer: "Tech Innovation Foundation",
    type: "Hackathon",
    deadline: "April 15, 2024",
    participantsCount: 5000,
    prizePool: "$50,000",
    description: "A worldwide competition to solve real-world problems using technology. Teams will work on innovative solutions in areas like sustainability, healthcare, and education.",
    requirements: ["Open to all students", "Team size: 2-4 members", "Original project", "Demo required"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Virtual"
  },
  {
    id: 2,
    title: "International Math Olympiad",
    organizer: "World Mathematical Society",
    type: "Academic",
    deadline: "March 30, 2024",
    participantsCount: 3000,
    prizePool: "$25,000",
    description: "The most prestigious mathematics competition for high school students. Participants will solve complex mathematical problems and compete with peers from around the world.",
    requirements: ["High school students only", "National selection required", "Under 20 years old"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "London, UK"
  },
  {
    id: 3,
    title: "Sustainable Cities Design Competition",
    organizer: "Green Future Initiative",
    type: "Design",
    deadline: "May 1, 2024",
    participantsCount: 2000,
    prizePool: "$30,000",
    description: "Design innovative solutions for sustainable urban development. Focus areas include green architecture, renewable energy integration, and smart city planning.",
    requirements: ["Architecture/Engineering students", "Portfolio submission", "Sustainability focus"],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Hybrid"
  }
];

const Competitions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const filteredCompetitions = competitions.filter(competition => {
    const matchesSearch = competition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         competition.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || competition.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || competition.location === selectedLocation;
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Competitions & Challenges</h1>
          <p className="text-gray-600">Showcase your skills and compete with talented individuals worldwide</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search competitions"
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
                <option value="Hackathon">Hackathon</option>
                <option value="Academic">Academic</option>
                <option value="Design">Design</option>
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="all">All Locations</option>
                <option value="Virtual">Virtual</option>
                <option value="Hybrid">Hybrid</option>
                <option value="London, UK">London</option>
              </select>
            </div>
          </div>
        </div>

        {/* Competition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetitions.map(competition => (
            <div key={competition.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={competition.image}
                  alt={competition.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">{competition.title}</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {competition.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{competition.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
                    {competition.prizePool}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-red-500" />
                    {competition.deadline}
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-blue-500" />
                    {competition.participantsCount.toLocaleString()} participants
                  </span>
                  <span className="flex items-center">
                    <Globe className="h-4 w-4 mr-1 text-green-500" />
                    {competition.location}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Requirements:</h3>
                  <div className="flex flex-wrap gap-2">
                    {competition.requirements.map((req, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competitions;