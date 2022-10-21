// import useDarkMode from 'use-dark-mode';
import LightSwitch from '../public/LightSwitch.svg';
import React from 'react';

const DarkModeSwitch = () => {
//   const darkMode = useDarkMode(false);
  return (
    <div>
      <label className='custom-control-label' htmlFor='darkmodeSwitch'>
        <LightSwitch />
      </label>
    </div>
  );
};

export default DarkModeSwitch;
