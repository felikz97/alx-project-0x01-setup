import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 mt-10">
      &copy; {new Date().getFullYear()} ALX Project. All rights reserved.
    </footer>
  );
};

export default Footer;
