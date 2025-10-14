import React from 'react';
import SectionsHead from '../components/common/SectionsHead';
import TeamMember from '../components/about/TeamMember';
import TestimonialSlider from '../components/about/TestimonialSlider';

const AboutUs = () => {
    const teamMembers = [
        {
            id: 1,
            name: "John Smith",
            role: "Founder & CEO",
            image: "/images/team/john-smith.jpg",
            description: "Music industry veteran with 15+ years of experience"
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Head of Operations",
            image: "/images/team/sarah-johnson.jpg",
            description: "Former recording artist turned business leader"
        },
        {
            id: 3,
            name: "Mike Wilson",
            role: "Lead Sound Engineer",
            image: "/images/team/mike-wilson.jpg",
            description: "Grammy-nominated sound engineering expert"
        }
    ];

    return (
        <main className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1>About G-Sound</h1>
                    <p>Your Premier Destination for Quality Music Equipment</p>
                </div>
            </section>

            <section className="our-story">
                <div className="container">
                    <SectionsHead heading="Our Story" />
                    <div className="story-content">
                        <img src="/images/about/store-front.jpg" alt="G-Sound Store Front" loading="lazy" />
                        <div className="story-text">
                            <p>Founded in 2010, G-Sound has grown from a small local music shop to a leading provider of premium audio equipment and musical instruments.</p>
                            <p>Our passion for music and commitment to quality has helped us build a community of musicians, producers, and audio enthusiasts.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="what-we-offer">
                <div className="container">
                    <SectionsHead heading="What We Offer" />
                    <div className="offers-grid">
                        <div className="offer-item">
                            <h3>Premium Equipment</h3>
                            <p>Carefully curated selection of top-quality instruments and audio gear</p>
                        </div>
                        <div className="offer-item">
                            <h3>Expert Advice</h3>
                            <p>Professional guidance from experienced musicians and audio engineers</p>
                        </div>
                        <div className="offer-item">
                            <h3>Service & Support</h3>
                            <p>Comprehensive after-sales support and equipment maintenance</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="meet-team">
                <div className="container">
                    <SectionsHead heading="Meet Our Team" />
                    <div className="team-grid">
                        {teamMembers.map(member => (
                            <TeamMember key={member.id} {...member} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <div className="container">
                    <SectionsHead heading="What Our Customers Say" />
                    <TestimonialSlider />
                </div>
            </section>

            <section className="visit-us">
                <div className="container">
                    <SectionsHead heading="Visit Our Store" />
                    <div className="location-info">
                        <div className="address">
                            <h3>Store Address</h3>
                            <p>123 Music Street</p>
                            <p>Harmony City, HC 12345</p>
                            <p>Phone: (555) 123-4567</p>
                        </div>
                        <div className="hours">
                            <h3>Business Hours</h3>
                            <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                            <p>Saturday: 10:00 AM - 6:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;