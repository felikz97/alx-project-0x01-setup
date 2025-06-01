import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">ALX Project</h1>
        <div className="space-x-4">
          <Link href="/posts" className="hover:underline">
            Posts
          </Link>
          <Link href="/users" className="hover:underline">
            Users
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
