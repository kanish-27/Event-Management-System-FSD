import React from 'react';
import './Stats.css';

const Stats = () => {
    const stats = [
        { number: "10k+", label: "Events Hosted" },
        { number: "500k+", label: "Tickets Sold" },
        { number: "50+", label: "Cities" },
        { number: "4.9/5", label: "User Rating" }
    ];

    return (
        <section className="stats-section">
            <div className="container stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <h3 className="stat-number">{stat.number}</h3>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
