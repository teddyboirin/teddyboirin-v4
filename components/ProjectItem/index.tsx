import { memo } from 'react';
// import Image from 'next/image';

import Close from '@components/ui/icons/Close';
import { Project } from '../../types/project';

type Props = {
  project: Project;
  handleClose: () => void;
};

function Index({ project, handleClose }: Props) {
  return (
    <div className="h-screen w-screen left-0 top-0 flex items-center justify-center z-[100]">
      <div className="bg-white w-[90%] md:w-1/2 md:min-h-[400px] flex md:grid md:grid-cols-[300px_1fr] flex-col md:flex-row p-3 gap-3 rounded-basic shadow-projectOpen relative">
        <div
          className="absolute top-3 right-3 cursor-pointer"
          onClick={handleClose}
          onKeyPress={handleClose}
          role="button"
          tabIndex={0}
        >
          <Close />
        </div>
        <div className="bg-black rounded-basic w-full h-full overflow-scroll">
          {/* <Image src={project.image.src} alt="image-project" /> */}
        </div>
        <div className="h-full w-full">{project?.desc}</div>
      </div>
    </div>
  );
}
export default memo(Index);
