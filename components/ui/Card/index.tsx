import { memo } from 'react';

import Image from 'next/image';

import { Project } from '../../../types/project';

type Props = {
  project: Project;
  onClick: () => void;
};

function Card({ project, onClick }: Props) {
  return (
    <button
      type="button"
      className="flex shadow-card relative h-full "
      onClick={onClick}
    >
      <Image
        src={project.image}
        alt={project.title}
        style={{
          objectFit: 'cover',
        }}
        className="rounded-basic"
      />
      <div
        className="absolute text-center bottom-[8px] text-[24px] lg:text-[32px] w-full whitespace-nowrap font-semibold z-[200] uppercase "
        style={{ color: project.color }}
      >
        {project.title}
      </div>
    </button>
  );
}
export default memo(Card);
