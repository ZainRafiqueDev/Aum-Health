import styled from 'styled-components';
import { brand } from '../content/site-content.js';

const LogoWrap = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  line-height: 1;
`;

const LogoImg = styled.img`
  display: block;
  height: 36px;
  width: 36px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  flex: 0 0 auto;
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
      <LogoImg src="/assets/logo/logo.jpeg" alt="" />
      <Wordmark>
        <Aum $light={light}>AUM</Aum>
        <HealthWord $light={light}>health</HealthWord>
      </Wordmark>
    </LogoWrap>
  );
}
