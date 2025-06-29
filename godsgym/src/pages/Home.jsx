import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import ExploreSections from '../components/ExploreSections';

function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section style={{ marginTop: '80px' }}>
        <Gallery />
      </section>

      <section style={{ marginTop: '80px', marginBottom: '60px' }}>
        <ExploreSections />
      </section>
    </>
  );
}

export default Home;
