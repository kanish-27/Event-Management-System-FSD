import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import './EventCard.css';

const EventCard = ({ event }) => {
    return (
        <div className="event-card animate-fade-in delay-200">
            <div className="event-image-wrapper">
                <img src={event.image || `https://picsum.photos/seed/${event.id}/800/600`} alt={event.title} className="event-image" />
                <div className="event-category-badge">{event.category}</div>
            </div>
            <div className="event-content">
                <div className="event-meta">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {event.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>
                </div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description.substring(0, 100)}...</p>
                <button className="book-btn">
                    Book Now <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default EventCard;
