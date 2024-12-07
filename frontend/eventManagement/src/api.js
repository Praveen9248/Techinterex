import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/events";

export const getEvents = () => axios.get(API_BASE_URL);
export const createEvent = (event) => axios.post(API_BASE_URL, event);
export const updateEvent = (id, event) => axios.patch(`${API_BASE_URL}/${id}`, event);
export const deleteEvent = (id) => axios.delete(`${API_BASE_URL}/${id}`);
