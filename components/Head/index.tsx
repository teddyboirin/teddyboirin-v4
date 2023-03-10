import { memo, useLayoutEffect, useState } from 'react';
import { Bounce, gsap, Power3 } from 'gsap';
import { useTheme } from 'next-themes'
import Button from '../ui/Button';
import Image from 'next/image';
import Me from '../../public/img/me.jpg';
import Skotch from '../ui/Skotch';
import Arrow from '../ui/icons/Arrow';
import Sun from '../ui/icons/Sun';
import Burger from '../ui/icons/Burger';
import Cloud from '../ui/icons/Cloud';
import Smile from '../ui/icons/Smile';
import Link from 'next/link';

function Head() {
  const [skotch, setSkotck] = useState(false);
  const [ended, setEnded] = useState(false);
  const { theme, setTheme } = useTheme()
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
        }
      );
    }
  };

  // useLayoutEffect(() => {
  //   gsap.from(['#image', '#title'], {
  //     y: -40,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: .3,
  //     ease: Power3.easeOut,
  //   })
  // }, [])
  return (
    <div className="w-full mt-5 flex items-center justify-between gap-5 relative flex-col md:flex-row md:h-[calc(100vh_-_60px_-_32px_-_96px)]">
      <div className="absolute right-0 top-[30px] md:right-[40px] md:top-[50px] z-[200]">
        <Sun />
      </div>
      <div className="absolute left-[580px] top-[120px] z-[200] hidden md:block">
        <Burger />
      </div>
      <div className="md:min-w-[407px] md:min-h-[485px] filter-shadow rounded-basic relative">
        <div className="absolute top-[34px] md:right-[180px] md:bottom-0 z-[200]">
          <Cloud />
        </div>
        <div
          className={`absolute top-[-7px] left-[-14px] z-[300] transition duration-300 ${
            ended ? 'opacity-0' : 'opacity-100 cursor-pointer'
          }`}
          onClick={() => Falling()}
        >
          <Skotch />
        </div>
        <div
          className={`absolute top-[-7px] right-[-14px] rotate-[65deg] z-[300] ${
            skotch ? 'opacity-0' : 'opacity-100 cursor-pointer'
          }`}
          onClick={() => Anim()}
        >
          <Skotch />
        </div>
        <div className="relative">
          <div
            className={`absolute top-[-120px] right-[-50px] transition duration-300 hidden md:block ${
              skotch ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Arrow />
          </div>
          <Image id="image" src={Me} alt="me" className="rounded-basic" />
          <div
            className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-[-1] transition duration-300 ${
              ended ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Smile />
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <h1 id="title" className={`text-30 md:text-54 font-bold ${theme === 'dark' ? 'white' : 'black'}`}>
          Hi! Je suis Teddy ????, <br /> d??veloppeur front-end ???????????????
        </h1>
        <p className="text-14 md:text-16 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <div className="flex gap-3">
          <Link href="#">
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
