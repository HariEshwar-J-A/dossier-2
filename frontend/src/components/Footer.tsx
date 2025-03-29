import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
    </footer>
  );
};

export default Footer;
