import { AnimatePresence, motion } from 'framer-motion';
import { memo } from 'react';
import { useApp } from '@hooks/useApp';

import Close from '@components/ui/icons/Close';
import Email from '@components/ui/icons/Email';
import Linkedin from '@components/ui/icons/Linkedin';
import Tel from '@components/ui/icons/Tel';

function Contact() {
  const { isOpenContact, setIsOpenContact } = useApp();

  return (
    <AnimatePresence>
      {isOpenContact && (
        <motion.div
          initial={{
            y: -70,
          }}
          animate={{
            y: 0,
          }}
          exit={{
            y: -70,
          }}
          transition={{ type: 'spring', velocity: 50 }}
          className="absolute w-full top-0 left-0 bg-scotch p-2 flex gap-0.10 md:gap-3 items-center justify-center text-black text-12 flex-col md:flex-row"
        >
          <button
            type="button"
            className="absolute right-3 cursor-pointer"
            onClick={() => setIsOpenContact(!isOpenContact)}
          >
            <Close />
          </button>
          <div className="flex items-center justify-center gap-0.5 md:gap-1">
            <Tel />
            <span>
              <a href="tel:+33678622843">06 78 62 28 43</a>
            </span>
          </div>
          <div className="flex items-center justify-center gap-0.5 md:gap-1">
            <Email />
            <span>
              <a href="mailto:hello@teddyboirin.com">hello@teddyboirin.com</a>
            </span>
          </div>
          <div className="flex items-center justify-center gap-0.5 md:gap-1">
            <Linkedin />
            <span>
              <a href="https://www.linkedin.com/in/teddyboirin/" target="_blank" rel="noreferrer">/teddyboirin</a>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default memo(Contact);
