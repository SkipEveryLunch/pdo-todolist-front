import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <nav>
        <ul className="py-5 flex gap-5 justify-center">
          <li>
            <Link to="/">Tasks</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
