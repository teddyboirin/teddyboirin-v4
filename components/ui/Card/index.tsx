import { memo } from 'react';

import Image from 'next/image';

import { Project } from '../../../types/project';

type Props = {
  project: Project;
};

function Card({ project }: Props) {
  return (
    <button type="button" className="flex shadow-card relative h-full">
      <Image
        src={project.image}
        alt={project.title}
        width={303}
        height={455}
        style={{
          objectFit: 'cover',
        }}
      />
      <div
        className="absolute text-center bottom-[8px] text-[32px] w-full whitespace-nowrap font-semibold z-[200] uppercase"
        style={{ color: project.color }}
      >
        {project.title}
      </div>
    </button>
  );
}
export default memo(Card);
