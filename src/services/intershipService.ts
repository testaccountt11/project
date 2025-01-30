import axios from "axios";

export interface Internship {
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
  applicationLink?: string;
}

const API_URL = "http://localhost:3000/api/internships";

export const internshipService = {
  async getAll(): Promise<Internship[]> {
    const response = await axios.get(API_URL);
    return response.data;
  },

  async getByType(type: string): Promise<Internship[]> {
    const response = await axios.get(`${API_URL}?type=${type}`);
    return response.data;
  },

  async getByLocation(location: string): Promise<Internship[]> {
    const response = await axios.get(`${API_URL}?location=${location}`);
    return response.data;
  },
  async submitApplication(formData: FormData): Promise<void> {
    try {
      const response = await axios.post(`${API_URL}/apply`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
      });
      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Failed to submit application");
    }
  },
};
