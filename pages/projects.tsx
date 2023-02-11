import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';

import Container from '../components/Container';
import HeadUtils from '../components/Utils/Head';
import Header from '../components/Header';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Data } from '../public/data/projects';

export default function Home() {
  return (
    <>
      <HeadUtils>développeur front-end | projets </HeadUtils>
      <main>
        <Container>
          <>
            <Header />
            <div className="w-full mt-5 flex items-center justify-between gap-5 relative flex-col md:flex-row md:min-h-[calc(100vh_-_60px_-_32px_-_96px)]">
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
                    <SwiperSlide className="relative h-full !w-fit">
                      <button
                        type="button"
                        className="flex shadow-card relative h-full"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={303}
                          height={455}
                          style={{
                            objectFit: 'cover',
                          }}
                        />
                        <div className="absolute text-center bottom-[8px] text-[32px] w-full whitespace-nowrap font-semibold z-[200] uppercase">
                          {project.title}
                        </div>
                      </button>
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </div>
          </>
        </Container>
      </main>
    </>
  );
}
