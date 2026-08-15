import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import BadgeStrip from './components/BadgeStrip.jsx';
import GlpSection from './components/GlpSection.jsx';
import FeatureSection from './components/FeatureSection.jsx';
import SupplementBanner from './components/SupplementBanner.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import GuaranteeStrip from './components/GuaranteeStrip.jsx';
import Footer from './components/Footer.jsx';
import {
  supplementSection,
  sexualHealthSection,
  mensHealthSection,
  womensHealthSection,
  hairSection,
  skincareSection,
} from './content/site-content.js';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BadgeStrip />
        <GlpSection />
        <FeatureSection {...supplementSection} />
        <SupplementBanner />
        <FeatureSection {...sexualHealthSection} />
        <FeatureSection {...mensHealthSection} />
        <FeatureSection {...womensHealthSection} />
        <FeatureSection {...hairSection} />
        <FeatureSection {...skincareSection} />
        <TestimonialsSection />
        <GuaranteeStrip />
      </main>
      <Footer />
    </>
  );
}
