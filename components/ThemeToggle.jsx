import React from 'react';
import { useState, useEffect } from 'react';
import { theme, useTheme } from 'next-themes';
import LightSwitch from '../public/LightSwitch.svg';
import DarkSwitch from '../public/DarkSwitch.svg';

//based on https://www.npmjs.com/package/next-themes and  https://dev.to/ekqt/no-brainer-dark-mode-for-nextjs-fo0

const ThemeToggle = () => {
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
      {resolvedTheme === 'dark' ? <DarkSwitch /> : <LightSwitch />}
    </div>
  );
};

//   const [activeTheme, setActiveTheme] = useState('light');
//   const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

//   const { theme, setTheme } = useTheme();

//return (
// <div>
{
  /* <button onClick={() => setTheme(theme == 'light')}>
        <span>
          <LightSwitch />
        </span>
      </button>
      <button onClick={() => setTheme(theme == 'dark')}>
        <span>
          <DarkSwitch />
        </span>
      </button> */
}
//</div>
//   );
// };

export default ThemeToggle;
