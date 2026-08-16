import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import BadgeStrip from './components/BadgeStrip.jsx';
import GlpSection from './components/GlpSection.jsx';
import FeatureSection from './components/FeatureSection.jsx';
import SupplementBanner from './components/SupplementBanner.jsx';
import GuaranteeStrip from './components/GuaranteeStrip.jsx';
import Footer from './components/Footer.jsx';
import {
  supplementSection,
  mensHealthSection,
  peptidesSection,
  hairSection,
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
        {/* Sexual Health section temporarily removed per client request */}
        <FeatureSection {...mensHealthSection} collageAspect="16 / 9" />
        <FeatureSection {...peptidesSection} collageAspect="16 / 9" />
        {/* Women's Health section temporarily removed per client request */}
        <FeatureSection {...hairSection} />
        {/* Skincare section temporarily removed per client request */}
        {/* Testimonials section temporarily removed per client request */}
        <GuaranteeStrip />
      </main>
      <Footer />
    </>
  );
}
