import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/gods gym logo.svg';

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: '#232323',
        fontWeight: 'bold',
        letterSpacing: 2,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 10,
      }}
    >
      <div className="container-fluid px-4">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{
            color: '#ffe066',
            fontSize: '1.5rem',
            fontFamily: 'Oswald, Arial, sans-serif',
            gap: '0.5rem',
            textDecoration: 'none',
          }}
        >
          <img
            src={logo}
            alt="Gods Gym Logo"
            style={{
              height: '36px',
              width: '36px',
              marginRight: '10px',
              verticalAlign: 'middle',
              display: 'inline-block',
            }}
          />
          GOD'S GYM
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span
            className="navbar-toggler-icon"
            style={{ color: '#ffe066' }}
          ></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center flex-wrap">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/plans', label: 'Plans & Timings' },
              { path: '/trainers', label: 'Trainers & Services' },
              { path: '/features', label: 'Features' },
              { path: '/contact', label: 'Contact' },
            ].map((link, index) => (
              <li key={index} className="nav-item mx-2 my-1">
                <NavLink
                  className="nav-link px-2"
                  to={link.path}
                  style={({ isActive }) => ({
                    color: isActive ? '#ffd43b' : '#ffe066',
                    fontSize: '1.1rem',
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
