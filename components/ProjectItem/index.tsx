import { memo } from 'react';
import { Project } from '../../types/project';

import Image from 'next/image';

type Props = {
  project: Project;
  handleClose: () => void;
};

function Index({ project, handleClose }: Props) {
  return (
    <div
      className="h-screen w-screen fixed left-0 top-0 flex items-center justify-center z-[100]"
      onClick={handleClose}
    >
      <div className="bg-white w-[90%] md:w-1/2 md:min-h-[400px] flex md:grid md:grid-cols-[300px_1fr] flex-col md:flex-row p-3 gap-3 rounded-basic shadow-projectOpen">
        <div className="bg-black rounded-basic w-full h-full overflow-scroll">
          {/* <Image src={project.image.src} alt="image-project" /> */}
        </div>
        <div className="h-full w-full">{project.desc}</div>
      </div>
    </div>
  );
}
export default memo(Index);
