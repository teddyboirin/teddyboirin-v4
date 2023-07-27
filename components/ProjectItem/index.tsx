import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { memo } from 'react';

import Badge from '@components/ui/Badge';
import Close from '@components/ui/icons/Close';
import Image from 'next/image';

import Button from '@components/ui/Button';
import { Project } from '../../types/project';

type Props = {
  project: Project;
  handleClose: () => void;
};

function Index({ project, handleClose }: Props) {
  return (
    <div className="left-0 top-0 flex items-center justify-center z-[100]">
      <div className="bg-white w-[300px] md:w-[800px] flex md:grid md:grid-cols-[300px_1fr] flex-col md:flex-row p-3 gap-3 rounded-basic shadow-projectOpen !fixed !z-50">
        <div
          className="absolute top-4 right-4 md:top-3 md:right-3 cursor-pointer z-10"
          onClick={handleClose}
          onKeyPress={handleClose}
          role="button"
          tabIndex={0}
        >
          <Close />
        </div>
        <div className="rounded-basic w-full md:h-full h-[300px] overflow-scroll relative">
          <Image
            src={project.image.src}
            alt="image-project"
            fill
            quality={100}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="h-full w-full projects">
          <div className="flex gap-1 md:gap-2 md:items-center flex-col md:flex-row">
            <h3 className="text-26 md:text-28 font-semibold text-black">
              {project.title}
            </h3>
            <div className="flex gap-2 mb-1 md:mb-0 items-center md:justify-center">
              <Badge>{project.type.toUpperCase()}</Badge>
              <a href={project.link} target="_blank" rel="nofollow noreferrer">
                <Button secondary small>
                  Visiter
                </Button>
              </a>
            </div>
          </div>
          <ReactMarkdown className="text-12 md:text-14 text-black">
            {project?.desc}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
export default memo(Index);
