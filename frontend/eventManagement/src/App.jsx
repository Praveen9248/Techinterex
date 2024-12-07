import './App.css'
import React, { useState, useEffect } from "react";
import { getEvents, createEvent, updateEvent, deleteEvent } from "./api";

function App() {
    const [events, setEvents] = useState([]);
    const [form, setForm] = useState({ title: "",  date: "",description: ""});

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const response = await getEvents();
        setEvents(response.data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.id) {
            await updateEvent(form.id, form);
        } else {
            await createEvent(form);
        }
        fetchEvents();
        setForm({ title: "",  date: "",description: ""});
    };

    const handleEdit = (event) => {
        setForm(event);
    };

    const handleDelete = async (id) => {
        await deleteEvent(id);
        fetchEvents();
    };

    return (
        <div>
            <h1>Event Management</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
                <input type="date" name="date" value={form.date} onChange={handleChange} required />
                <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
                <button type="submit">{form.id ? "Update Event" : "Create Event"}</button>
            </form>

            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                        <p>{event.date}</p>
                        <button onClick={() => handleEdit(event)}>Edit</button>
                        <button onClick={() => handleDelete(event.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

