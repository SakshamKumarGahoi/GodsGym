import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import BMICalculator from '../components/BMICalculator';

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
        <BMICalculator />
      </section>
    </>
  );
}

export default Home;
