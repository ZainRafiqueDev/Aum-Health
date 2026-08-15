import styled from 'styled-components';
import { brand } from '../content/site-content.js';
import InfinityMark from './InfinityMark.jsx';

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
      <InfinityMark
        color={light ? 'var(--color-gold-accent)' : 'var(--color-navy-800)'}
        glow={light ? '#fff6e6' : '#ffffff'}
        size={26}
      />
      <Wordmark>
        <Aum $light={light}>AUM</Aum>
        <HealthWord $light={light}>health</HealthWord>
      </Wordmark>
    </LogoWrap>
  );
}
