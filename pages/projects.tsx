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
  const [projectOpen, setProjectOpen] = useState<number | null>();
  return (
    <>
      <HeadUtils>développeur front-end | projets </HeadUtils>
      <>
        <AnimatePresence>
          {projectOpen && (
            <motion.div
              id="teddy"
              onKeyPress={() => setProjectOpen(null)}
              onClick={() => setProjectOpen(null)}
              role="button"
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
          {projectOpen && (
            <motion.div
              className=" w-auto h-auto"
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
              exit={{
                opacity: 0,
                zIndex: 150,
                top: 0,
                left: 0,
                scaleY: 0.8,
              }}
            >
              <ProjectItem
                project={Data[projectOpen]}
                handleClose={() => setProjectOpen(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <h1 className="text-4xl font-bold text-center mt-6">Mes projets 🖼️</h1>
        <div className="w-full mt-10 flex items-center justify-between gap-5 relative flex-col md:flex-row swiper-block">
          <Swiper
            className="!md:grid w-full !pb-8"
            slidesPerView={2}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 32,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 48,
              },
            }}
            spaceBetween={48}
            parallax
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Mousewheel]}
            mousewheel={{
              releaseOnEdges: true,
            }}
          >
            {Data.map((project) => (
              <SwiperSlide key={project.id} className="relative">
                <Card
                  project={project}
                  onClick={() => setProjectOpen(project.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    </>
  );
}
