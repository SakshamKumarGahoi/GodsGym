import React, { useState } from 'react';
import machine1 from '../assets/machine1.jpg';
import machine2 from '../assets/machine2.jpg';
import machine3 from '../assets/machine3.mp4';
import machine4 from '../assets/machine4.mp4';
import machine5 from '../assets/machine5.jpg';
import machine6 from '../assets/machine6.mp4';

const media = [
  { src: machine1, type: 'image' },
  { src: machine2, type: 'image' },
  { src: machine3, type: 'video' },
  { src: machine4, type: 'video' },
  { src: machine5, type: 'image' },
  { src: machine6, type: 'video' },
];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      className="gallery-section w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative"
      style={{
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
        {media.map((item, idx) => (
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
            {item.type === 'image' ? (
              <img
                src={item.src}
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
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onClick={() => setSelected(item)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 224, 102, 0.6)';
                  e.currentTarget.style.borderColor = '#ffd700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.5)';
                  e.currentTarget.style.borderColor = '#ffe066';
                }}
              />
            ) : (
              <video
                src={item.src}
                className="gallery-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 16,
                  border: '2px solid #ffe066',
                  cursor: 'pointer',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.5)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onClick={() => setSelected(item)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 224, 102, 0.6)';
                  e.currentTarget.style.borderColor = '#ffd700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.5)';
                  e.currentTarget.style.borderColor = '#ffe066';
                }}
                muted
                loop
                autoPlay
                playsInline
              />
            )}
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
          {selected.type === 'image' ? (
            <img
              src={selected.src}
              alt="Enlarged"
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                borderRadius: 16,
                border: '3px solid #ffe066',
                boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
              }}
            />
          ) : (
            <video
              src={selected.src}
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                borderRadius: 16,
                border: '3px solid #ffe066',
                boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
              }}
              controls
              autoPlay
              loop
              muted
              playsInline
            />
          )}
        </div>
      )}
    </section>
  );
}

export default Gallery;
