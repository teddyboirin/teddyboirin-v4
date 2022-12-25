import Container from '../components/Container';
import HeadUtils from '../components/Utils/Head';
import Header from '../components/Header';
import HeadPart from '../components/Head';

export default function Home() {
  return (
    <>
      <HeadUtils>développeur front-end</HeadUtils>
      <main>
        <Container>
          <>
            <Header />
            <HeadPart />
          </>
        </Container>
      </main>
    </>
  );
}
