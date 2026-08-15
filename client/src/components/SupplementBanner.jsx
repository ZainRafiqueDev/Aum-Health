import styled from 'styled-components';
import { supplementBanner } from '../content/site-content.js';
import { Container } from '../styles/primitives.js';
import { Reveal, ZoomIn } from './motion/Reveal.jsx';

const Banner = styled.section`
  padding: var(--space-5) 0;
  background: #ffffff;
`;

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  text-align: center;

  @media (min-width: 900px) {
    flex-direction: row;
    text-align: left;
  }
`;

const ImageWrap = styled.div`
  flex: 1 1 55%;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
`;

const Callout = styled.div`
  flex: 1 1 35%;
  background: var(--tint-supplements);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
`;

const Tagline = styled.p`
  margin: 0 0 var(--space-2);
  font-size: var(--fs-h3);
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.4;
`;


export default function SupplementBanner() {
  return (
    <Banner>
      <Inner>
        <ImageWrap>
          <ZoomIn>
            <ProductImage src={supplementBanner.image} alt="" />
          </ZoomIn>
        </ImageWrap>
        <Reveal delay={0.15}>
          <Callout>
            <Tagline>{supplementBanner.tagline}</Tagline>
          </Callout>
        </Reveal>
      </Inner>
    </Banner>
  );
}
