import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import FeatureSplit from './components/FeatureSplit';
import FeaturesGrid from './components/FeaturesGrid';
import FeaturedListings from './components/FeaturedListings';
import PopularLocations from './components/PopularLocations';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-brand-stone font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBanner />
      <FeatureSplit />
      <FeaturesGrid />
      <FeaturedListings />
      <PopularLocations />
      <FAQ />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
