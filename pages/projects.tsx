import { Swiper, SwiperSlide } from 'swiper/react';
import { Data } from '@public/data/projects';
import { Pagination } from 'swiper';

import Container from '@components/Container';
import HeadUtils from '@components/Utils/Head';
import Card from '@components/ui/Card';
import Header from '@components/Header';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
                    <SwiperSlide key={project.title} className="relative h-full !w-fit">
                      <Card project={project} />
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
