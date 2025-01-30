// project/src/services/courseService.ts
import axios from "axios";

const API_URL = "http://localhost:3000/api/courses";

export interface Course {
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

export const courseService = {
  async getAllCourses(): Promise<Course[]> {
    const response = await axios.get(API_URL);
    return response.data;
  },

  async getCoursesByCategory(category: string): Promise<Course[]> {
    const response = await axios.get(`${API_URL}?category=${category}`);
    return response.data;
  },

  async getCoursesByLevel(level: string): Promise<Course[]> {
    const response = await axios.get(`${API_URL}?level=${level}`);
    return response.data;
  },

  async getCourseById(id: number): Promise<Course> {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },
};
