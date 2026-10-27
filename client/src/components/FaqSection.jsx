import styled from 'styled-components';
import { faqSection } from '../content/site-content.js';
import { Section, Container, SectionHeading } from '../styles/primitives.js';
import { Reveal } from './motion/Reveal.jsx';

const Heading = styled(SectionHeading)`
  text-align: center;
  margin-bottom: var(--space-4);
`;

const List = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const Item = styled.details`
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 0 var(--space-3);

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-2);
    padding: var(--space-2) 0;
    font-weight: 700;
    color: var(--color-navy-800);
    cursor: pointer;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: '+';
    flex: 0 0 auto;
    font-size: 1.4rem;
    line-height: 1;
    color: var(--color-navy-600);
  }

  &[open] summary::after {
    content: '−';
  }

  p {
    margin: 0;
    padding: 0 0 var(--space-3);
    color: var(--color-text-muted);
    line-height: 1.7;
  }
`;

export default function FaqSection() {
  return (
    <Section id={faqSection.id} $alt>
      <Container>
        <Reveal>
          <Heading>{faqSection.heading}</Heading>
        </Reveal>
        <Reveal delay={0.1}>
          <List>
            {faqSection.items.map((item) => (
              <Item key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </Item>
            ))}
          </List>
        </Reveal>
      </Container>
    </Section>
  );
}
