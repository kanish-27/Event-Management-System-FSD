import React from 'react';
import './Categories.css';
import { Music, Code, Palette, Bike, Briefcase, Camera } from 'lucide-react';

const Categories = () => {
    const categories = [
        { name: 'Music', icon: Music, color: '#fca5a5' },
        { name: 'Tech', icon: Code, color: '#93c5fd' },
        { name: 'Art', icon: Palette, color: '#d8b4fe' },
        { name: 'Sports', icon: Bike, color: '#86efac' },
        { name: 'Business', icon: Briefcase, color: '#fde047' },
        { name: 'Photography', icon: Camera, color: '#fdba74' },
    ];

    return (
        <section className="categories-section container">
            <h2 className="section-title">Explore by Category</h2>
            <div className="categories-grid">
                {categories.map((cat, index) => (
                    <div key={index} className="category-card">
                        <div className="category-icon" style={{ backgroundColor: `${cat.color}20`, color: cat.color }}>
                            <cat.icon size={32} />
                        </div>
                        <h3 className="category-name">{cat.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
