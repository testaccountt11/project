import axios from "axios";

const API_URL = "http://localhost:3000/api/mentorship";

export interface MentorshipSession {
  id: number;
  mentorId: number;
  menteeId: number;
  topic: string;
  description: string;
  scheduledTime: string;
  duration: number;
  status: string;
  meetingLink: string;
}
interface BookingRequest {
  mentorId: number;
  date: string;
  time: string;
  topic: string;
  message: string;
}
export const mentorshipService = {
  async getMyMentoringSessions(): Promise<MentorshipSession[]> {
    const response = await axios.get(`${API_URL}/mentor`);
    return response.data;
  },

  async getMyMenteeSessions(): Promise<MentorshipSession[]> {
    const response = await axios.get(`${API_URL}/mentee`);
    return response.data;
  },

  async scheduleSession(
    session: Partial<MentorshipSession>
  ): Promise<MentorshipSession> {
    const response = await axios.post(`${API_URL}/sessions`, session);
    return response.data;
  },

  async bookSession(booking: BookingRequest) {
    const response = await axios.post("/api/mentorship/sessions", booking);
    return response.data;
  },

  async updateSessionStatus(
    id: number,
    status: string
  ): Promise<MentorshipSession> {
    const response = await axios.patch(`${API_URL}/${id}/status`, { status });
    return response.data;
  },
};
