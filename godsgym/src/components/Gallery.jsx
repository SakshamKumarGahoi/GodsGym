import React, { useState } from 'react';
import gym1 from '../assets/gym1.jpg';
import gym2 from '../assets/gym2.jpg';
import gym3 from '../assets/gym3.webp';

const images = [
  gym1,
  gym2,
  gym3,
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      className="gallery-section w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative"
      style={{
        background: '#000000', // Pure black
        paddingTop: '60px',
        paddingBottom: '40px',
        overflow: 'hidden',
      }}
    >
      <h2 className="highlight text-center mb-4" style={{ zIndex: 2 }}>Inside Our Gym</h2>

      <div
        className="d-flex flex-wrap justify-content-center align-items-center w-100"
        style={{
          gap: 24,
          padding: '0 2vw',
          width: '100vw',
          minHeight: '70vh',
          alignContent: 'center',
        }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="d-flex align-items-center justify-content-center"
            style={{
              flex: '1 1 320px',
              maxWidth: 500,
              minWidth: 320,
              height: '40vh',
            }}
          >
            <img
              src={src}
              alt={`Gym ${idx + 1}`}
              className="gallery-img"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 16,
                border: '2px solid #ffe066',
                cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(0,0,0,0.5)',
                transition: 'transform 0.2s ease-in-out',
              }}
              onClick={() => setSelected(src)}
            />
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            background: 'rgba(0,0,0,0.95)',
            zIndex: 1050,
            left: 0,
            top: 0,
          }}
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Enlarged"
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              borderRadius: 16,
              border: '3px solid #ffe066',
              boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
            }}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
