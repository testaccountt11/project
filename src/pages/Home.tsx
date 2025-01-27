import { Link } from 'react-router-dom';
import { ArrowRight, Star, BookOpen, Users, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Gateway to Educational Success
            </h1>
            <p className="text-xl mb-8">
              Discover opportunities in internships, competitions, courses, and mentorship
            </p>
            <Link
              to="/register"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Internships</h3>
              <p className="text-gray-600 mb-4">
                Find valuable work experience with our curated internship opportunities
              </p>
              <Link to="/internships" className="text-blue-600 hover:text-blue-700">
                Explore Internships →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Courses</h3>
              <p className="text-gray-600 mb-4">
                Access high-quality courses and prepare for international exams
              </p>
              <Link to="/courses" className="text-blue-600 hover:text-blue-700">
                Browse Courses →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
              <p className="text-gray-600 mb-4">
                Connect with experienced mentors who can guide your journey
              </p>
              <Link to="/mentorship" className="text-blue-600 hover:text-blue-700">
                Find a Mentor →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer Intern",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    text: "Through EduPlatform, I found an amazing internship opportunity that kickstarted my career in tech. The mentorship program was invaluable!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Research Assistant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    text: "The courses helped me prepare for my IELTS exam, and I achieved my target score. The practice materials were comprehensive and effective.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Data Science Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    text: "I participated in multiple competitions through the platform, which helped me build my portfolio and network with industry professionals.",
    rating: 4
  }
];

export default Home;