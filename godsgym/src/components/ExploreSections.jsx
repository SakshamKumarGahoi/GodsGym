import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExploreSections.css';

const sections = [
  {
    title: 'Know Our Story',
    desc: 'Discover the journey, vision, and values of our gym.',
    image: 'https://images.unsplash.com/photo-1738523686578-f18348c8292b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1602457470764-5d8000271c6a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/features',
  },
  {
    title: 'Join Gym Now',
    desc: 'Reach out to us today and start your fitness journey!',
    image: 'https://images.unsplash.com/photo-1604480133080-602261a680df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
            onClick={() => {
              window.scrollTo(0, 0); // scroll to top
              navigate(section.link);
            }}
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
