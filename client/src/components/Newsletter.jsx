import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Thanks for subscribing with ${email}!`);
            setEmail('');
        }
    };

    return (
        <section className="newsletter-section">
            <div className="container newsletter-content">
                <h2 className="newsletter-title">Stay in the Loop</h2>
                <p className="newsletter-subtitle">
                    Get the latest events and exclusive offers delivered straight to your inbox.
                </p>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="newsletter-input"
                        required
                    />
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
