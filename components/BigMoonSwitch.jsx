import React from 'react';
import { useState, useEffect } from 'react';
import { theme, useTheme } from 'next-themes';
import BigBrightMoonShade from '../public/images/BigBrightMoonShade_dark.svg';
import BrightMoon from '../public/images/BrightMoon.svg';

//based on https://www.npmjs.com/package/next-themes and  https://dev.to/ekqt/no-brainer-dark-mode-for-nextjs-fo0

const BigMoonSwitch = () => {
  

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
    >
      {resolvedTheme === 'dark' ? <BigBrightMoonShade /> : <BrightMoon />}
    </div>
  );
};

export default BigMoonSwitch;
