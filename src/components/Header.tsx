import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center h-16 bg-header items-center">
      <h1 className="text-white shadow-md text-4xl">BUSC</h1>
      <h1 className="text-yellow-title text-4xl">ANIME</h1>
    </header>
  );
};

export default Header;
