import { memo, useState } from 'react';
import { Bounce, gsap } from 'gsap';

import Button from '../ui/Button';
import Image from 'next/image';
import Me from '../../public/img/me.jpg';
import Skotch from '../ui/Skotch';
import Arrow from '../ui/icons/Arrow';
import Sun from '../ui/icons/Sun';
import Burger from '../ui/icons/Burger';
import Cloud from '../ui/icons/Cloud';
import Smile from '../ui/icons/Smile';

function Head() {
  const [skotch, setSkotck] = useState(false);

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
          transform: 'rotate(50deg) translate(120px, 370px)',
          ease: Bounce.easeOut,
        }
      );
    }
  };
  return (
    <div className="w-full h-[calc(100vh_-_163px)] mt-10 flex items-center justify-between gap-5 relative">
       <div className="absolute left-[-140px] top-[300px] z-[200]">
          <Smile />
        </div>
      <div className="absolute right-[40px] top-[50px] z-[200]">
        <Sun />
      </div>
      <div className="absolute left-[580px] top-[120px] z-[200]">
        <Burger />
      </div>
      <div className="min-w-[407px] min-h-[485px] filter-shadow rounded-basic relative">
        <div
          className="absolute top-[-7px] left-[-14px] z-[300]"
          onClick={() => Falling()}
        >
          <Skotch />
        </div>
        <div
          className="absolute top-[-7px] right-[-14px] rotate-[65deg] z-[300]"
          onClick={() => Anim()}
        >
          <Skotch />
        </div>
        <div id="image relative">
          <div className="absolute top-[-120px] right-[-50px]">
            <Arrow />
          </div>
          <Image src={Me} alt="me" className="rounded-basic" />
        </div>
      </div>
      <div className="w-full relative">
        <h1 className="text-54 font-bold">
          Hi! Je suis Teddy 🧸, <br /> développeur front-end 👨🏻‍💻
        </h1>
        <p className="text-16 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <div className="flex gap-3">
          <Button basic>Contactez-moi</Button>
          <Button secondary>Mes projets</Button>
        </div>
        <div className="absolute right-[180px] bottom-0 z-[200]">
          <Cloud />
        </div>
      </div>
    </div>
  );
}

export default memo(Head);
