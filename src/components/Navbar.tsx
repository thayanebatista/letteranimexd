import React from 'react';
import Button from './Button';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center h-16 gap-x-4 bg-navbar items-center">
      <Button label="All Formats" />
      <Button label="TV Show" />
      <Button label="Movie" />
      <Button label="TV Short" />
      <Button label="Special" />
      <Button label="OVA" />
      <Button label="ONA" />
      <Button label="Music" />
    </nav>
  );
};

export default Navbar;
