import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyGlobalArt from './components/WhyGlobalArt';
import Programs from './components/Programs';
import OtherClasses from './components/OtherClasses';
import CTABanner from './components/CTABanner';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyGlobalArt />
        <Programs />
        <OtherClasses />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
