import styled, { keyframes, css } from 'styled-components';

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const MarqueeWrap = styled.div`
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} linear infinite;
  animation-duration: ${(props) => props.$speed}s;
  gap: ${(props) => props.$gap};

  ${(props) =>
    props.$reverse &&
    css`
      animation-direction: reverse;
    `}
`;

const Group = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: ${(props) => props.$gap};
`;


export default function Marquee({ children, reverse = false, speed = 30, gap = 'var(--space-3)' }) {
  return (
    <MarqueeWrap>
      <Track $reverse={reverse} $speed={speed} $gap={gap}>
        <Group $gap={gap}>{children}</Group>
        <Group $gap={gap} aria-hidden="true">
          {children}
        </Group>
      </Track>
    </MarqueeWrap>
  );
}
