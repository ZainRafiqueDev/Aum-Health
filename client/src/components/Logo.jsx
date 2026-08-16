import styled from 'styled-components';
import { brand } from '../content/site-content.js';

// logo1.png has a lot of transparent padding baked around the actual mark,
// with the (too-thin-to-read-small) wordmark below it. Measured via canvas
// pixel analysis: on the 511x489 source, the mark itself sits at
// x:163-347, y:198-262. We crop tightly to just that region (native
// resolution first, then scale the whole crop down as one unit — avoids
// compounding rounding errors) and pair it with real, independently
// colored/sized HTML text instead of the baked-in wordmark.
const CONTENT = { x: 163, y: 198, w: 184, h: 64 };
const NATURAL = { w: 511, h: 489 };
const DISPLAY_HEIGHT = 32;
const SCALE = DISPLAY_HEIGHT / CONTENT.h;

const LogoFrame = styled.span`
  position: relative;
  display: block;
  height: ${DISPLAY_HEIGHT}px;
  width: ${Math.round(CONTENT.w * SCALE)}px;
  overflow: hidden;
  flex: 0 0 auto;
`;

const CropLayer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: ${CONTENT.w}px;
  height: ${CONTENT.h}px;
  transform-origin: top left;
  transform: scale(${SCALE});
  overflow: hidden;
`;

// Recolored via CSS mask (using the source PNG's alpha channel as a stencil)
// rather than a color filter, so the mark renders as a bright gold gradient
// regardless of the source image's baked-in colors.
const LogoMark = styled.span`
  display: block;
  width: ${CONTENT.w}px;
  height: ${CONTENT.h}px;
  background: linear-gradient(135deg, #f8dfa0 0%, #e0ac52 45%, #f4d488 75%, #dba84f 100%);
  -webkit-mask-image: url('/assets/logo/logo1.png');
  mask-image: url('/assets/logo/logo1.png');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: -${CONTENT.x}px -${CONTENT.y}px;
  mask-position: -${CONTENT.x}px -${CONTENT.y}px;
  -webkit-mask-size: ${NATURAL.w}px ${NATURAL.h}px;
  mask-size: ${NATURAL.w}px ${NATURAL.h}px;
`;

// The soft light glowing from the center crossing-point of the infinity mark.
const LogoGlow = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 13px;
  height: 13px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, #ffffff 0%, #fff1cf 35%, rgba(250, 214, 140, 0.7) 60%, transparent 78%);
  box-shadow: 0 0 10px 3px rgba(255, 214, 140, 0.55), 0 0 20px 8px rgba(255, 197, 110, 0.25);
  pointer-events: none;
  animation: aum-logo-glow-pulse 3.2s ease-in-out infinite;

  @keyframes aum-logo-glow-pulse {
    0%, 100% {
      opacity: 0.85;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.15);
    }
  }
`;

const LogoWrap = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
`;

const Wordmark = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 0.2rem;
  font-size: 1.35rem;
  letter-spacing: 0.03em;
`;

const Aum = styled.span`
  color: ${(props) => (props.$light ? '#ffffff' : 'var(--color-navy-800)')};
  font-weight: 800;
`;

const HealthWord = styled.span`
  color: ${(props) => (props.$light ? 'var(--color-gold-accent)' : 'var(--color-grey-wordmark)')};
  font-weight: 400;
`;

export default function Logo({ light = false }) {
  return (
    <LogoWrap aria-label={brand.name}>
      <LogoFrame>
        <CropLayer>
          <LogoMark />
          <LogoGlow />
        </CropLayer>
      </LogoFrame>
      <Wordmark>
        <Aum $light={light}>AUM</Aum>
        <HealthWord $light={light}>health</HealthWord>
      </Wordmark>
    </LogoWrap>
  );
}
