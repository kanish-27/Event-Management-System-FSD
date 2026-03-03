import React from 'react';
import EventCard from '../components/EventCard';
import './Events.css';

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Tech Innovation Summit 2024",
            date: "March 15, 2024",
            location: "San Francisco, CA",
            description: "Join industry leaders to discuss the designated future of technology.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
            category: "Technology"
        },
        {
            id: 2,
            title: "Summer Music Festival",
            date: "July 20, 2024",
            location: "Austin, TX",
            description: "Experience the best live music from top artists around the world.",
            image: "https://images.unsplash.com/photo-1459749411177-0473ef71ea48?auto=format&fit=crop&w=800&q=80",
            category: "Music"
        },
        {
            id: 3,
            title: "Global Art Expo",
            date: "May 10, 2024",
            location: "New York, NY",
            description: "Discover contemporary art from emerging and established artists.",
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80",
            category: "Art"
        },
        {
            id: 4,
            title: "Food Truck Fiesta",
            date: "April 05, 2024",
            location: "Portland, OR",
            description: "Taste delicious cuisines from the best food trucks in the city.",
            image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=800&q=80",
            category: "Food"
        },
        {
            id: 5,
            title: "Startup Weekend",
            date: "June 12, 2024",
            location: "Seattle, WA",
            description: "Build a startup in 54 hours with mentors and investors.",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
            category: "Business"
        },
        {
            id: 6,
            title: "Wellness Retreat",
            date: "August 18, 2024",
            location: "Bali, Indonesia",
            description: "Rejuvenate your mind and body in a serene tropical paradise.",
            image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=800&q=80",
            category: "Health"
        }
    ];

    return (
        <div className="events-page">
            <header className="events-header">
                <div className="container">
                    <h1 className="events-title">Upcoming Events</h1>
                    <p className="events-subtitle">Explore a world of opportunities and fun.</p>
                </div>
            </header>

            <section className="events-grid container">
                {events.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </section>
        </div>
    );
};

export default Events;
