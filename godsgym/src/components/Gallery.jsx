function Gallery() {
  return (
    <div className="container section">
      <h2 className="highlight text-center mb-4">Gallery</h2>
      <div className="pics-row">
        <img src="https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80" alt="Gym 1" className="gym-pic" />
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Gym 2" className="gym-pic" />
        <img src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" alt="Gym 3" className="gym-pic" />
      </div>
    </div>
  );
}

export default Gallery;
