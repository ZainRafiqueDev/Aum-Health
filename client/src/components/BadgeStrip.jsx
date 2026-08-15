import styled from 'styled-components';
import { hero } from '../content/site-content.js';
import Marquee from './Marquee.jsx';
import Icon from './Icon.jsx';

const Strip = styled.div`
  width: 100%;
  margin-top: var(--space-4);
  padding: var(--space-3) 0;
  background: #ffffff;
  border-bottom: 1px solid var(--color-border);
`;

const Item = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  font-size: var(--fs-small);
  font-weight: 700;
  color: var(--color-navy-700);
  padding: 0 var(--space-4);
`;


const REPEATS = 4;

export default function BadgeStrip() {
  const badges = Array.from({ length: REPEATS }, () => hero.badges).flat();

  return (
    <Strip>
      <Marquee speed={30} gap="0">
        {badges.map((badge, i) => (
          <Item key={`${badge.label}-${i}`}>
            <Icon name={badge.icon} />
            {badge.label}
          </Item>
        ))}
      </Marquee>
    </Strip>
  );
}
