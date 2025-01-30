import React, { useEffect, useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  Building,
  Clock,
  ArrowRight,
} from "lucide-react";
import { internshipService } from "../services/intershipService";
import { Dialog } from "@headlessui/react";
import toast from "react-hot-toast";
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
interface ApplicationForm {
  internshipId: number;
  fullName: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: string;
  portfolio?: string;
}
const internshipsPage1: Internship[] = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    duration: "3 months",
    description:
      "Join our engineering team and work on cutting-edge web applications using modern technologies.",
    requirements: [
      "JavaScript",
      "React",
      "Node.js",
      "Currently enrolled in CS program",
    ],
    postedDate: "2 days ago",
    logo: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Analytics Pro",
    location: "Remote",
    type: "Part-time",
    duration: "6 months",
    description:
      "Help us analyze large datasets and build machine learning models for predictive analytics.",
    requirements: ["Python", "SQL", "Statistics", "Machine Learning basics"],
    postedDate: "1 week ago",
    logo: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
  },
  {
    id: 3,
    title: "UX Design Intern",
    company: "Creative Design Co",
    location: "New York, NY",
    type: "Full-time",
    duration: "4 months",
    description:
      "Work with our design team to create beautiful and intuitive user interfaces.",
    requirements: [
      "Figma",
      "UI/UX principles",
      "Portfolio",
      "Design degree pursuit",
    ],
    postedDate: "3 days ago",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
  },
];

const internshipsPage2: Internship[] = [
  {
    id: 4,
    title: "Marketing Intern",
    company: "Growth Marketing Inc",
    location: "Chicago, IL",
    type: "Part-time",
    duration: "4 months",
    description:
      "Assist in developing and implementing digital marketing strategies across various platforms.",
    requirements: [
      "Social Media Marketing",
      "Content Creation",
      "Analytics",
      "Marketing major",
    ],
    postedDate: "5 days ago",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
  },
  {
    id: 5,
    title: "Mobile App Development Intern",
    company: "AppTech Solutions",
    location: "Austin, TX",
    type: "Full-time",
    duration: "6 months",
    description:
      "Develop mobile applications for iOS and Android platforms using React Native.",
    requirements: ["React Native", "JavaScript", "Mobile Development", "Git"],
    postedDate: "1 day ago",
    logo: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
  },
  {
    id: 6,
    title: "Cloud Engineering Intern",
    company: "CloudScale Systems",
    location: "Seattle, WA",
    type: "Full-time",
    duration: "5 months",
    description:
      "Work with our cloud infrastructure team on AWS and Azure platforms.",
    requirements: ["AWS", "Azure", "Linux", "Python", "Network fundamentals"],
    postedDate: "4 days ago",
    logo: "https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
  },
  {
    id: 7,
    title: "Cybersecurity Intern",
    company: "SecureNet Defense",
    location: "Boston, MA",
    type: "Full-time",
    duration: "4 months",
    description:
      "Join our security team to help protect systems and networks from cyber threats.",
    requirements: [
      "Network Security",
      "Python",
      "Linux",
      "Security fundamentals",
    ],
    postedDate: "2 days ago",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
  },
  {
    id: 8,
    title: "Product Management Intern",
    company: "ProductLabs",
    location: "Remote",
    type: "Part-time",
    duration: "3 months",
    description:
      "Work with product teams to define requirements and drive product development.",
    requirements: [
      "Agile methodology",
      "Data analysis",
      "Communication skills",
      "Business background",
    ],
    postedDate: "1 week ago",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
  },
  {
    id: 9,
    title: "AI Research Intern",
    company: "AI Innovations",
    location: "San Jose, CA",
    type: "Full-time",
    duration: "6 months",
    description:
      "Conduct research in artificial intelligence and machine learning applications.",
    requirements: [
      "Machine Learning",
      "Deep Learning",
      "Python",
      "Research experience",
    ],
    postedDate: "3 days ago",
    logo: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
  },
];

const Internships = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] =
    useState<Internship | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationForm, setApplicationForm] = useState<ApplicationForm>({
    internshipId: 0,
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    portfolio: "",
  });
  const currentInternships =
    currentPage === 1 ? internshipsPage1 : internshipsPage2;
  useEffect(() => {
    loadInternships();
  }, []);
  const handleApply = (internship: Internship) => {
    setSelectedInternship(internship);
    setApplicationForm((prev) => ({ ...prev, internshipId: internship.id }));
    setIsApplyOpen(true);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("internshipId", applicationForm.internshipId.toString());
      formData.append("fullName", applicationForm.fullName);
      formData.append("email", applicationForm.email);
      formData.append("phone", applicationForm.phone);
      formData.append("coverLetter", applicationForm.coverLetter);

      if (applicationForm.portfolio) {
        formData.append("portfolio", applicationForm.portfolio);
      }

      // Check file size before uploading
      if (
        applicationForm.resume &&
        applicationForm.resume.size > 10 * 1024 * 1024
      ) {
        throw new Error("File size should not exceed 10MB");
      }

      if (applicationForm.resume) {
        formData.append("resume", applicationForm.resume);
      }

      await internshipService.submitApplication(formData);
      toast.success("Application submitted successfully!");
      setIsApplyOpen(false);
      resetForm();
    } catch (error: any) {
      console.error("Application submission failed:", error);
      toast.error(error.message || "Failed to submit application");
    } finally {
      setIsSubmitting(false);
    }
  };
  const resetForm = () => {
    setApplicationForm({
      internshipId: 0,
      fullName: "",
      email: "",
      phone: "",
      resume: null,
      coverLetter: "",
      portfolio: "",
    });
  };
  const loadInternships = async () => {
    try {
      const data = await internshipService.getAll();
    } catch (error) {
      console.error("Failed to load internships:", error);
    } finally {
      setLoading(false);
    }
  };
  const filteredInternships = currentInternships.filter((internship) => {
    const matchesSearch =
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "all" || internship.type === selectedType;
    const matchesLocation =
      selectedLocation === "all" || internship.location === selectedLocation;
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Find Your Perfect Internship
          </h1>
          <p className="text-gray-600">
            Discover internship opportunities that match your skills and
            interests
          </p>
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
          {filteredInternships.map((internship) => (
            <div
              key={internship.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <img
                  src={internship.logo}
                  alt={internship.company}
                  className="w-16 h-16 rounded-lg object-cover mr-6"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {internship.title}
                      </h2>
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
                    <h3 className="text-sm font-semibold text-gray-900">
                      Requirements:
                    </h3>
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
                    <span className="text-sm text-gray-500">
                      Posted {internship.postedDate}
                    </span>
                    <button
                      onClick={() => handleApply(internship)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
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

      {isApplyOpen && selectedInternship && (
        <Dialog
          open={isApplyOpen}
          onClose={() => setIsApplyOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-lg p-6 max-w-md w-full">
              <Dialog.Title className="text-lg font-bold mb-4">
                Apply for {selectedInternship.title} at{" "}
                {selectedInternship.company}
              </Dialog.Title>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border rounded"
                    value={applicationForm.fullName}
                    onChange={(e) =>
                      setApplicationForm((prev) => ({
                        ...prev,
                        fullName: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-2 border rounded"
                    value={applicationForm.email}
                    onChange={(e) =>
                      setApplicationForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full p-2 border rounded"
                    value={applicationForm.phone}
                    onChange={(e) =>
                      setApplicationForm((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Resume
                  </label>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full p-2 border rounded"
                    onChange={(e) =>
                      setApplicationForm((prev) => ({
                        ...prev,
                        resume: e.target.files?.[0] || null,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Cover Letter
                  </label>
                  <textarea
                    required
                    className="w-full p-2 border rounded"
                    rows={4}
                    value={applicationForm.coverLetter}
                    onChange={(e) =>
                      setApplicationForm((prev) => ({
                        ...prev,
                        coverLetter: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Portfolio URL (Optional)
                  </label>
                  <input
                    type="url"
                    className="w-full p-2 border rounded"
                    value={applicationForm.portfolio}
                    onChange={(e) =>
                      setApplicationForm((prev) => ({
                        ...prev,
                        portfolio: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsApplyOpen(false)}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-blue-300"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Internships;
