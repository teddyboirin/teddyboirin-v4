import { AnimatePresence, motion } from 'framer-motion';
import { memo, useCallback } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

import { MenuItems } from './data';

function Menu() {
  const router = useRouter();

  const isActive = useCallback(
    (item) => router.pathname === item.link,
    [router],
  );
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          bottom: '-500px',
          left: '50%',
        }}
        animate={{
          opacity: 1,
          bottom: '40px',
          left: '50%',
        }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white absolute bottom-[40px] lg:bottom-[76px] left-1/2 -translate-x-1/2 rounded-basic p-3 lg:px-3 lg:py-4 z-[100] text-12 lg:text-14 border-scotch border-[1px] border-dashed"
      >
        <ul className="w-full flex gap-4">
          {MenuItems.map((item) => (
            <Link href={item.link} key={item.title}>
              <li
                className={`cursor-pointer hover:underline hover:decoration-wavy hover:decoration-scotch hover:underline-offset-4 ${
                  isActive(item)
                    ? 'underline decoration-wavy decoration-scotch underline-offset-4'
                    : ''
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>

  );
}
export default memo(Menu);
