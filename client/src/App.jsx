import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import BadgeStrip from './components/BadgeStrip.jsx';
import GlpSection from './components/GlpSection.jsx';
import FeatureSection from './components/FeatureSection.jsx';
import MedicalDisclaimerSection from './components/MedicalDisclaimerSection.jsx';
import GuaranteeStrip from './components/GuaranteeStrip.jsx';
import Footer from './components/Footer.jsx';
import {
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
        {/* Supplement section temporarily removed per client request (see supplementSection/supplementBanner in site-content.js) — replaced with medical disclaimers */}
        <MedicalDisclaimerSection />
        {/* Sexual Health section temporarily removed per client request */}
        <FeatureSection {...mensHealthSection} collageAspect="16 / 9" />
        <FeatureSection {...peptidesSection} />
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
