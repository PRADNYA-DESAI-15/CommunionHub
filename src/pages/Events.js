import { useState, useEffect } from "react";
import eventStyles from "../styles/Events.module.css";

export function Events() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [
      { id: 1, title: "Community Prayer", date: "2025-03-15", category: "Religious" },
      { id: 2, title: "Charity Fundraiser", date: "2025-03-20", category: "Charity" }
    ];
    setEvents(storedEvents);
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleInputChange = (e) => setNewEvent({ ...newEvent, [e.target.name]: e.target.value });

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.category) {
      setEvents([...events, { id: events.length + 1, ...newEvent }]);
      setNewEvent({ title: "", date: "", category: "" });
    }
  };

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  return (
    <div className={eventStyles.events}>
      <h1>Event Listings</h1>
      {loading ? <p>Loading events...</p> : (
        <>
          <label>Filter by Category: </label>
          <select value={filter} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Religious">Religious</option>
            <option value="Charity">Charity</option>
            <option value="Social">Social</option>
          </select>

          <ul>
            {filteredEvents.map(event => (
              <li key={event.id} className={eventStyles.eventItem}>
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>Category: {event.category}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      <h2>Add New Event</h2>
      <form onSubmit={handleAddEvent} className={eventStyles.form}>
        <input type="text" name="title" placeholder="Title" value={newEvent.title} onChange={handleInputChange} required className={eventStyles.input} />
        <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} required className={eventStyles.input} />
        <select name="category" value={newEvent.category} onChange={handleInputChange} required className={eventStyles.input}>
          <option value="">Select Category</option>
          <option value="Religious">Religious</option>
          <option value="Charity">Charity</option>
          <option value="Social">Social</option>
        </select>
        <button type="submit" className={eventStyles.button}>Add Event</button>
      </form>
    </div>
  );
}
