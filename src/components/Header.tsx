import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex justify-center h-16 bg-primary items-center">
        <h1 className="text-white shadow-md text-4xl">LETTER</h1>
        <h1 className="text-yellow-title text-4xl">ANIME</h1>
        <h1 className="text-green-300 text-4xl">X</h1>
        <h1 className="text-blue-300 text-4xl">D</h1>
      </header>
      <Navbar />
    </div>
  );
};

export default Header;
