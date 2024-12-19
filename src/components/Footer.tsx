import React from 'react';
import Button from './Button';
import Icon from '@mdi/react';

import { mdiGithub, mdiGmail, mdiInstagram, mdiLinkedin } from '@mdi/js';

const Footer: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 pb-10">
        <div className="flex justify-center">
          <Button label="Previous" />
        </div>
        <div className="flex justify-center">
          <Button label="Next" />
        </div>
      </div>
      <div>
        <footer className="flex flex-col justify-center h-24 bg-primary">
          <div className="flex items-center justify-center gap-8">
            <a href="https://www.instagram.com/thayanebatista/">
              <Icon path={mdiInstagram} size={1} color={'#fff'} />
            </a>
            <a href="https://www.linkedin.com/in/thayanebatista/">
              <Icon path={mdiLinkedin} size={1} color={'#fff'} />
            </a>
            <a href="https://github.com/thayanebatista">
              <Icon path={mdiGithub} size={1} color={'#fff'} />
            </a>
            <a href="thayane.batista.ec@gmail.com">
              <Icon path={mdiGmail} size={1} color={'#fff'} />
            </a>
          </div>
        </footer>
        <div className="bg-footer text-white h-10 flex justify-center items-center">
          Copyright © 2024 Thayane Batista
        </div>
      </div>
    </div>
  );
};

export default Footer;
