import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title animate-fade-in">
                    Discover <br />
                    <span className="text-gradient">Extraordinary Events</span>
                </h1>
                <p className="hero-subtitle animate-fade-in delay-200">
                    Join the most vibrant community of event enthusiasts.
                    From tech conferences to music festivals, find your next experience here.
                </p>
                <div className="hero-actions animate-fade-in delay-300">
                    <a href="#events" className="btn btn-primary">
                        Browse Events <ArrowRight size={20} />
                    </a>
                    <a href="/about" className="btn btn-outline">
                        Learn More
                    </a>
                </div>
            </div>

            <div className="hero-background-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>
        </section>
    );
};

export default Hero;
