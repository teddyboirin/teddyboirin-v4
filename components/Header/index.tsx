import React, { memo } from 'react';
import { switchTheme } from 'helpers/theme';
import { useTheme } from 'next-themes';

import Link from 'next/link';

import DarkMode from '../ui/icons/ThemeButton';
import Github from '../ui/icons/Github';
import Logo from '../ui/Logo';

function Header() {
  const { theme, setTheme } = useTheme();
  const themeColor = theme === 'dark' ? 'white' : 'black';

  const handleClick = () => {
    switchTheme(theme, setTheme);
  };

  return (
    <header className="flex justify-between min-h-[60px] items-center">
      <Link href="/" passHref>
        <Logo color={themeColor} />
      </Link>
      <div className="flex items-center gap-4">
        <button type="button" onClick={handleClick}>
          <DarkMode color={themeColor} />
        </button>
        <a
          href="https://github.com/teddyboirin"
          rel="noreferrer"
          target="_blank"
        >
          <Github color={themeColor} />
        </a>
      </div>
    </header>
  );
}

export default memo(Header);
