import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUsers,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-xl text-gray-600">
          Empowering students to reach their full potential
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-center mb-4">
            <FaUsers className="text-4xl text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700">
            We are dedicated to connecting students with valuable opportunities
            in internships, competitions, courses, and mentorship programs. Our
            platform serves as a bridge between ambitious students and their
            future careers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-center mb-4">
            <FaLightbulb className="text-4xl text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Our Vision
          </h2>
          <p className="text-gray-700">
            To create a comprehensive ecosystem where students can discover,
            learn, and grow through various educational and professional
            development opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-center mb-4">
            <FaRocket className="text-4xl text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Our Impact
          </h2>
          <p className="text-gray-700">
            Helping thousands of students achieve their dreams through
            personalized guidance and access to life-changing opportunities.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Contact Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-xl text-blue-600" />
              <p className="text-gray-700">
                123 Education Street, New York, NY 10001
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-xl text-blue-600" />
              <p className="text-gray-700">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-xl text-blue-600" />
              <p className="text-gray-700">contact@educationplatform.com</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-6 h-[600px]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Find Us</h2>
          <div className="h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147160.0109005271!2d71.41800821150264!3d51.16052870563016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424580c47db54609%3A0x97f9148dddb19228!2sAstana%2C%20Kazakhstan!5e0!3m2!1sen!2s!4v1655668767312!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-4"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
