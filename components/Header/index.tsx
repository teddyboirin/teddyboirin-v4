import React, { memo } from 'react';

import Link from 'next/link';
import Logo from '../Logo';
import Github from '../ui/icons/Github';
import DarkMode from '../ui/icons/ThemeButton';
import { useTheme } from 'next-themes';
import { switchTheme } from 'helpers/theme';
import Container from '@components/Container';
function Header() {
  const { theme, setTheme, systemTheme } = useTheme();

  const themeColor = theme === 'dark' ? 'white' : 'black';

  const handleClick = () => {
    switchTheme(theme, setTheme);
  };

  return (
    <div className="flex justify-between min-h-[60px] items-center">
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
    </div>
  );
}

export default memo(Header);
