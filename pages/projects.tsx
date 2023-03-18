import { Swiper, SwiperSlide } from 'swiper/react';
import { Data } from '@public/data/projects';
import { Pagination } from 'swiper';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import HeadUtils from '@components/Utils/Head';
import Card from '@components/ui/Card';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectItem from '@components/ProjectItem';

export default function Home() {
  const [projectOpen, setProjectOpen] = useState<number | null>();
  return (
    <>
      <HeadUtils>développeur front-end | projets </HeadUtils>
      <>
        <AnimatePresence>
          {projectOpen && (
            <>
              <motion.div
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
                exit={{ opacity: 0, zIndex: 150, top: 0, left: 0 }}
                className="bg-overlay w-screen h-screen absolute left-0 top-0"
              />
              <motion.div
                layout
                initial={{
                  opacity: 0,
                  zIndex: 150,
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  scaleY: 0.8,
                }}
                animate={{
                  opacity: 1,
                  zIndex: 150,
                  top: 0,
                  left: 0,
                  scaleY: 1,
                }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, zIndex: 150, top: 0, left: 0, scaleY: 0.8 }}
              >
                <ProjectItem
                  project={Data[projectOpen]}
                  handleClose={() => setProjectOpen(null)}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <h1 className="text-4xl font-bold text-center mt-6">Mes projets 🖼️</h1>
        <div className="w-full mt-10 flex items-center justify-between gap-5 relative flex-col md:flex-row">
          <Swiper
            spaceBetween={126}
            slidesPerView={3}
            watchSlidesProgress
            pagination={{
              dynamicBullets: true,
            }}
            className="w-full h-full !pb-8"
            freeMode
            modules={[Pagination]}
          >
            {Data.map((project) => (
              <>
                <SwiperSlide
                  key={project.id}
                  className="relative h-full !w-fit"
                >
                  <Card
                    project={project}
                    onClick={() => setProjectOpen(project.id)}
                  />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </>
    </>
  );
}
