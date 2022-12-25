import React, { memo } from 'react';

import Link from 'next/link';
import Logo from '../Logo';
import Github from '../ui/icons/Github';
import DarkMode from '../ui/icons/DarkMode';

function Header() {
  return (
    <div className="flex justify-between mt-10 md:mt-6">
      <Link href="/" passHref>
        <Logo />
      </Link>
      <div className="flex items-center gap-4">
        <button type="button" onClick={() => {}}>
          <DarkMode />
        </button>
        <a href="https://github.com/teddyboirin" rel="noreferrer" target="_blank">
          <Github />
        </a>
      </div>
    </div>
  );
}

export default memo(Header);
