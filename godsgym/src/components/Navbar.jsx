import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#232323', fontWeight: 'bold', letterSpacing: 2, position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 10}}>
      <div className="container-fluid px-4">
        <Link className="navbar-brand" to="/" style={{color: '#ffe066', fontSize: '1.5rem', fontFamily: 'Oswald, Arial, sans-serif'}}>GODS GYM</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{ color: '#ffe066' }}></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item"><NavLink className="nav-link" style={({isActive}) => ({color: isActive ? '#ffd43b' : '#ffe066', fontSize: '1.1rem'})} to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" style={({isActive}) => ({color: isActive ? '#ffd43b' : '#ffe066', fontSize: '1.1rem'})} to="/about">About Us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" style={({isActive}) => ({color: isActive ? '#ffd43b' : '#ffe066', fontSize: '1.1rem'})} to="/plans">Plans & Timings</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" style={({isActive}) => ({color: isActive ? '#ffd43b' : '#ffe066', fontSize: '1.1rem'})} to="/trainers">Trainers & Services</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" style={({isActive}) => ({color: isActive ? '#ffd43b' : '#ffe066', fontSize: '1.1rem'})} to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
