import { memo } from 'react';
import Button from '../ui/Button';

function Head() {
  return (
    <div className="w-full h-[calc(100vh_-_163px)] mt-10 flex items-center justify-between gap-5">
      <div className="bg-black min-w-[407px] min-h-[485px]"></div>
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
