import { memo, useState } from 'react';
import { Bounce, gsap } from 'gsap';

import Button from '../ui/Button';
import Image from 'next/image';
import Me from '../../public/img/me.jpg';
import Skotch from '../ui/Skotch';

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
    <div className="w-full h-[calc(100vh_-_163px)] mt-10 flex items-center justify-between gap-5">
      <div className="bg-black min-w-[407px] min-h-[485px] filter-shadow rounded-basic relative">
        <div
          className="absolute top-[-7px] left-[-14px] z-[100]"
          onClick={() => Falling()}
        >
          <Skotch />
        </div>
        <div
          className="absolute top-[-7px] right-[-14px] rotate-[65deg]"
          onClick={() => Anim()}
        >
          <Skotch />
        </div>
        <div id="image">
          <Image src={Me} alt="me" />
        </div>
      </div>
      <div className="w-full">
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
      </div>
    </div>
  );
}

export default memo(Head);
