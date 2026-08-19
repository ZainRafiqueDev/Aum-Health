import styled from 'styled-components';
import { guaranteeStrip } from '../content/site-content.js';
import Icon from './Icon.jsx';
import { Container } from '../styles/primitives.js';
import { motion, StaggerItem } from './motion/Reveal.jsx';

const Strip = styled.section`
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-3) 0;
`;

const Inner = styled(motion.create(Container))`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
  text-align: center;

  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const innerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-weight: 700;
  color: ${(props) => (props.$first ? 'var(--color-gold-accent)' : 'var(--color-navy-800)')};
  padding: var(--space-1) 0;
  min-width: 0;

  @media (min-width: 700px) {
    border-right: 1px solid var(--color-border);

    &:last-child {
      border-right: none;
    }
  }
`;

export default function GuaranteeStrip() {
  return (
    <Strip>
      <Inner initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={innerVariants}>
        {guaranteeStrip.items.map((item, i) => (
          <StaggerItem key={item.label}>
            <Item $first={i === 0}>
              <Icon name={item.icon} size={20} />
              {item.label}
            </Item>
          </StaggerItem>
        ))}
      </Inner>
    </Strip>
  );
}
