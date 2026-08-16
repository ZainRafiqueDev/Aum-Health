import styled from 'styled-components';
import { hero } from '../content/site-content.js';
import RichHeading from './RichHeading.jsx';
import { SectionHeading } from '../styles/primitives.js';
import { motion, Stagger, StaggerItem } from './motion/Reveal.jsx';


const OVERLAP = 120;

const CONTENT_GAP = 48;

const HeroWrap = styled.section``;

const HeroBg = styled.div`
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, var(--color-navy-900), var(--color-navy-700));
  padding: var(--space-6) var(--space-4) ${OVERLAP + CONTENT_GAP}px;
  text-align: center;
`;

const Watermark = styled.span`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  font-size: 22vw;
  font-weight: 800;
  line-height: 1;
  color: #ffffff;
  opacity: 0.08;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
`;

const HeroHeadline = styled(SectionHeading)`
  color: #fff;
  font-size: var(--fs-h1);
  margin: 0;

  .highlight {
    color: var(--color-blue-accent);
  }
`;

const Subhead = styled.p`
  max-width: 680px;
  margin: var(--space-3) auto 0;
  color: var(--color-text-on-dark-muted);
  font-size: 1.1rem;
  line-height: 1.6;
`;

// The single shared white panel all 4 cards live inside.
const CardPanel = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 1040px;
  margin: ${-OVERLAP}px var(--space-4) 0;
  padding: 18px;
  background: #fff;
  border-radius: 24px;
  box-shadow: var(--shadow-card);

  @media (min-width: 1104px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CardsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  min-width: 0;

  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CategoryItem = styled(motion.a)`
  display: flex;
  flex-direction: column;
  min-width: 0;
  text-decoration: none;
  color: var(--color-text);
  border-radius: 14px;
`;


const ColoredPanel = styled.div`
  aspect-ratio: 1 / 0.75;
  border-radius: 14px;
  background: ${(props) => props.$tint};
  overflow: hidden;

  ${(props) =>
    props.$style === 'product'
      ? `
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: visible;

    img {
      width: 65%;
      object-fit: contain;
      transform: translateY(-16%);
    }
  `
      : `
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`;

const CardLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  padding: var(--space-2) 4px 4px;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <HeroWrap id="top" as="section">
      <HeroBg>
        <Watermark aria-hidden="true">AUM</Watermark>
        <Stagger stagger={0.12}>
          <HeroContent>
            <StaggerItem>
              <RichHeading as={HeroHeadline} parts={hero.headingParts} />
            </StaggerItem>
            <StaggerItem>
              <Subhead>{hero.subhead}</Subhead>
            </StaggerItem>
          </HeroContent>
        </Stagger>
      </HeroBg>

      <CardPanel
        id="get-started"
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <CardsGrid initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } } }}>
          {hero.categories.map((cat) => (
            <CategoryItem
              key={cat.key}
              href={cat.href}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <ColoredPanel $tint={cat.tint} $style={cat.style}>
                <img src={cat.image} alt="" />
              </ColoredPanel>
              <CardLabel>
                {cat.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </CardLabel>
            </CategoryItem>
          ))}
        </CardsGrid>
      </CardPanel>
    </HeroWrap>
  );
}
