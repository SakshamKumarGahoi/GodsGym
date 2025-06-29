import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExploreSections.css';

const sections = [
  {
    title: 'Know Our Story',
    desc: 'Discover the journey, vision, and values of our gym.',
    image: 'https://images.unsplash.com/photo-1579758629938-03608ccdbaba?auto=format&fit=crop&w=800&q=80',
    link: '/about',
  },
  {
    title: 'Meet Trainers',
    desc: 'Get to know our certified trainers & personalized sessions.',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80',
    link: '/trainers',
  },
  {
    title: 'Know More About Gym',
    desc: 'Explore our facilities, equipment, and environment.',
    image: 'https://images.unsplash.com/photo-1583454110558-4cc7f2e0caa1?auto=format&fit=crop&w=800&q=80',
    link: '/features',
  },
  {
    title: 'Join Gym Now',
    desc: 'Reach out to us today and start your fitness journey!',
    image: 'https://images.unsplash.com/photo-1588776814546-ec7d23dd1e4d?auto=format&fit=crop&w=800&q=80',
    link: '/contact',
  },
];

function ExploreSections() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid explore-section pt-5 pb-4">
      <h2 className="highlight text-center mb-5">Explore More</h2>
      <div className="explore-cards-row">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="explore-card-clean"
            style={{ backgroundImage: `url(${section.image})` }}
            onClick={() => navigate(section.link)}
          >
            <div className="explore-card-clean-text">
              <h4>{section.title}</h4>
              <p>{section.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreSections;
