import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context';
import { logout } from '../APIcalls';
const Header = () => {
  const { isLoggedin, setIsLoggedin } = useContext(Context);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    if (isLoggedin) {
      setLinks([
        { name: 'Tasks', path: '/' },
        { name: 'Logout', path: null },
      ]);
    } else {
      setLinks([
        { name: 'Register', path: '/register' },
        { name: 'Login', path: '/login' },
      ]);
    }
  }, [isLoggedin]);
  const handleLogout = async () => {
    const res = await logout();
    if (res) {
      alert('logged out');
      setIsLoggedin(false);
    } else {
      alert('Could not log out');
    }
  };
  return (
    <header>
      <nav>
        <ul className="py-5 flex gap-5 justify-center">
          {links
            ? links.map((link) => {
                return link.path !== null ? (
                  <li>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ) : (
                  <li>
                    <span class="cursor-pointer" onClick={handleLogout}>
                      {link.name}
                    </span>
                  </li>
                );
              })
            : ''}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
