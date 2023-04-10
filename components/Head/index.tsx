import { AnimatePresence, motion } from 'framer-motion';
import { Bounce, gsap } from 'gsap';
import { memo, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';

import Image from 'next/image';
import Link from 'next/link';

import Arrow from '../ui/icons/Arrow';
import Burger from '../ui/icons/Burger';
import Button from '../ui/Button';
import Cloud from '../ui/icons/Cloud';
import Me from '../../public/img/me.jpg';
import Skotch from '../ui/Skotch';
import Smile from '../ui/icons/Smile';
import Sun from '../ui/icons/Sun';

function Head() {
  const [skotch, setSkotck] = useState<boolean>(false);
  const [ended, setEnded] = useState<boolean>(false);
  const { theme } = useTheme();
  const updateColor = useMemo(
    () => (theme === 'dark' ? 'white' : 'black'),
    [theme],
  );
  const Anim = () => {
    setSkotck(true);
    gsap.to('#image', {
      transform: 'rotate(50deg) translate(-110px, 220px)',
      ease: Bounce.easeOut,
    });
  };
  const Falling = () => {
    if (skotch) {
      gsap.fromTo(
        '#image',
        {
          transform: 'rotate(50deg) translate(-110px, 220px)',
          ease: Bounce.easeOut,
        },
        {
          transform: 'rotate(50deg) translate(120px, 150%)',
          opacity: 0,
          ease: Bounce.easeOut,
          onComplete: () => {
            setEnded(true);
          },
        },
      );
    }
  };

  return (
    <div className="w-full mt-5 flex items-center justify-between gap-5 relative flex-col md:flex-row md:h-[calc(100vh_-_60px_-_32px_-_96px)]">
      <div className="absolute right-0 top-[30px] md:right-[40px] md:top-[50px] z-[200]">
        <Sun color={updateColor} />
      </div>
      <div className="absolute left-[580px] top-[120px] z-[200] hidden md:block">
        <Burger color={updateColor} />
      </div>
      <div className="md:min-w-[407px] md:min-h-[485px] filter-shadow rounded-basic relative">
        <div className="absolute top-[-64px] md:right-[180px] md:bottom-0 z-[200]">
          <Cloud color={updateColor} />
        </div>
        <div
          className={`absolute top-[-7px] left-[-14px] z-[300] transition duration-300 ${
            ended ? 'opacity-0' : 'opacity-100 cursor-pointer'
          }`}
          onKeyPress={() => Falling()}
          role="button"
          tabIndex={0}
          onClick={() => Falling()}
        >
          <Skotch color="#F2F614" />
        </div>
        <div
          className={`absolute top-[-7px] right-[-14px] rotate-[65deg] z-[300] ${
            skotch ? 'opacity-0' : 'opacity-100 cursor-pointer'
          }`}
          onKeyPress={() => Anim()}
          role="button"
          tabIndex={0}
          onClick={() => Anim()}
        >
          <Skotch color="#F2F614" />
        </div>
        <div className="relative">
          <div
            className={`absolute top-[-120px] right-[-50px] transition duration-300 hidden md:block ${
              skotch ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Arrow color={updateColor} />
          </div>
          <AnimatePresence>
            <motion.div
              initial={{
                height: '100%',
              }}
              animate={{
                height: 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: 0.3,
              }}
              className={`h-[485px] w-[407px] absolute rounded-basic ${
                theme === 'dark' ? 'bg-dark' : 'bg-white'
              }`}
            />
          </AnimatePresence>
          <Image
            id="image"
            src={Me}
            alt="me"
            className="rounded-basic"
            width={407}
            height={485}
          />
          <div
            className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-[-1] transition duration-300 ${
              ended ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Smile color={updateColor} />
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <h1
          id="title"
          className={`relative text-30 md:text-54 font-bold transition duration-300 ${
            theme === 'dark' ? 'white' : 'black'
          }`}
        >
          Hi! Je suis Teddy 🧸,
          {' '}
          <br />
          {' '}
          <span className={theme === 'dark' ? 'text-black' : 'text-white'}>
            développeur front-end 👨🏻‍💻
          </span>
          <AnimatePresence>
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: '95%',
                opacity: 1,
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className={`absolute bottom-0 z-[-10] w-full md:w-[90%] h-1/2 ${
                theme === 'dark' ? 'bg-white' : 'bg-black'
              }`}
            />
          </AnimatePresence>
        </h1>
        <p className="text-14 md:text-16 mt-2 transition duration-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <div className="flex gap-3 mt-3">
          <Link href="/contact">
            <Button basic>Contactez-moi</Button>
          </Link>
          <Link href="/projects">
            <Button secondary>Mes projets</Button>
          </Link>
        </div>
        <div className="absolute top-0 md:right-[180px] md:bottom-0 z-[200] hidden md:block">
          <Cloud />
        </div>
      </div>
    </div>
  );
}

export default memo(Head);
