import styled from 'styled-components';
import { supplementBanner } from '../content/site-content.js';
import { Container } from '../styles/primitives.js';
import { motion, useReducedMotion } from './motion/Reveal.jsx';

const Banner = styled.section`
  position: relative;
  padding: var(--space-4) 0;
  background: #ffffff;
  overflow: hidden;

  @media (min-width: 700px) {
    padding: var(--space-6) 0;
  }
`;

const Glow = styled.span`
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;

  &.gold {
    width: 260px;
    height: 260px;
    left: 8%;
    top: -60px;
    background: radial-gradient(circle, rgba(201, 165, 117, 0.22), transparent 70%);
  }

  &.violet {
    width: 320px;
    height: 320px;
    right: 6%;
    bottom: -100px;
    background: radial-gradient(circle, rgba(139, 111, 201, 0.16), transparent 70%);
  }
`;

const Inner = styled(Container)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  @media (min-width: 700px) {
    gap: var(--space-3);
  }
`;

const ImageWrap = styled(motion.div)`
  position: relative;
  flex: 0 1 130px;
  min-width: 0;
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow:
    0 24px 48px -20px rgba(28, 51, 72, 0.4),
    0 0 0 1px rgba(201, 165, 117, 0.25);

  @media (min-width: 480px) {
    flex-basis: 200px;
    border-radius: var(--radius-lg);
  }

  @media (min-width: 700px) {
    flex-basis: 320px;
  }
`;

const ImageSheen = styled.span`
  position: absolute;
  inset: 0;
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.22) 0%, transparent 30%);
  pointer-events: none;
`;

const ProductImage = styled.img.attrs({ loading: 'lazy', decoding: 'async' })`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Callout = styled(motion.div)`
  flex: 1 1 45%;
  min-width: 0;
  max-width: 420px;
  background: linear-gradient(160deg, #f6f3fc 0%, var(--tint-supplements) 100%);
  border-radius: 28px;
  padding: var(--space-2);
  text-align: center;
  box-shadow: 0 20px 40px -24px rgba(139, 111, 201, 0.4);

  @media (min-width: 480px) {
    padding: var(--space-3);
    border-radius: 36px;
  }

  @media (min-width: 700px) {
    padding: var(--space-5) var(--space-4);
    border-radius: 48px;
  }
`;

const Tagline = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.45;
  letter-spacing: 0.01em;

  @media (min-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 700px) {
    font-size: 1.4rem;
    line-height: 1.5;
  }
`;

const Accent = styled(motion.span)`
  display: block;
  height: 3px;
  width: 32px;
  margin: var(--space-2) auto 0;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--color-gold-accent), var(--tint-supplements-accent));
  transform-origin: center;

  @media (min-width: 700px) {
    width: 44px;
    margin-top: var(--space-3);
  }
`;

function AnimatedImage({ src }) {
  const reduced = useReducedMotion();
  return (
    <ImageWrap
      initial={reduced ? { opacity: 0 } : { opacity: 0, x: -24, scale: 1.05 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduced ? undefined : { y: -4 }}
    >
      <ProductImage src={src} alt="" />
      <ImageSheen />
    </ImageWrap>
  );
}

export default function SupplementBanner() {
  const reduced = useReducedMotion();
  return (
    <Banner>
      <Glow className="gold" aria-hidden="true" />
      <Glow className="violet" aria-hidden="true" />
      <Inner>
        <AnimatedImage src={supplementBanner.image} />
        <Callout
          initial={reduced ? { opacity: 0 } : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <Tagline>{supplementBanner.tagline}</Tagline>
          <Accent
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </Callout>
      </Inner>
    </Banner>
  );
}
