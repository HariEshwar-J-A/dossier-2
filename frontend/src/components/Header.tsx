import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">My Portfolio</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:underline">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
