import { AnimatePresence, motion } from 'framer-motion';
import { Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Data } from '@public/data/projects';
import { useState } from 'react';

import Card from '@components/ui/Card';
import HeadUtils from '@components/Utils/Head';
import ProjectItem from '@components/ProjectItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

export default function Home() {
  const [projectOpen, setProjectOpen] = useState<number | null>(null);
  const handleClick = (id) => {
    setProjectOpen(id);
  };
  return (
    <>
      <HeadUtils>développeur front-end | projets</HeadUtils>
      <>
        <AnimatePresence>
          {projectOpen !== null && (
            <motion.div
              layout
              onKeyPress={() => setProjectOpen(null)}
              onClick={() => setProjectOpen(null)}
              tabIndex={0}
              initial={{
                opacity: 0,
                zIndex: 150,
                position: 'fixed',
                top: 0,
                left: 0,
              }}
              animate={{
                opacity: 1,
                zIndex: 150,
                top: 0,
                left: 0,
              }}
              transition={{ duration: 0.3 }}
              exit={{
                opacity: 0,
                zIndex: 150,
                top: 0,
                left: 0,
              }}
              className="bg-overlay w-screen h-screen absolute left-0 top-0"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {projectOpen !== null && (
            <motion.div
              className="w-auto h-auto"
              initial={{
                opacity: 0,
                zIndex: 150,
                position: 'fixed',
                top: '50%',
                left: '50%',
                scaleY: 0.95,
              }}
              animate={{
                opacity: 1,
                zIndex: 150,
                top: '50%',
                left: '50%',
                scaleY: 1,
              }}
              transition={{ duration: 0.3 }}
              exit={{
                opacity: 0,
                zIndex: 150,
                top: '50%',
                left: '50%',
                scaleY: 0.95,
              }}
            >
              <ProjectItem
                project={Data[projectOpen]}
                handleClose={() => setProjectOpen(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <h1 className="text-2xl md:text-4xl font-bold text-center mt-6">Projets 🖼️</h1>
        <div className="w-full mt-5 lg:mt-10 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
          {Data.map((project) => (
            <Card
              key={project.id}
              project={project}
              onClick={() => handleClick(project.id)}
            />
          ))}
        </div>
      </>
    </>
  );
}
