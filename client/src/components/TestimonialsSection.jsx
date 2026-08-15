import styled from 'styled-components';
import { testimonials } from '../content/site-content.js';
import Marquee from './Marquee.jsx';
import { Section, Container, Eyebrow, SectionHeading, PlaceholderTag, Card } from '../styles/primitives.js';
import { Reveal } from './motion/Reveal.jsx';

const Header = styled(Container)`
  text-align: center;
  max-width: 640px;
  margin: 0 auto var(--space-5);
`;

const Pair = styled.div`
  display: flex;
  gap: var(--space-3);
`;

const PhotoCard = styled.img`
  width: 220px;
  height: 280px;
  object-fit: cover;
  border-radius: var(--radius-md);
`;

const QuoteCard = styled(Card)`
  width: 320px;
  padding: var(--space-3);
  margin: 0;
  background: var(--color-bg-alt);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
`;

const Name = styled.figcaption`
  font-weight: 700;
  font-size: var(--fs-small);
  color: var(--color-text);
`;

const Stars = styled.span`
  color: var(--color-gold-accent);
  letter-spacing: 0.1em;
  white-space: nowrap;
`;

const Quote = styled.blockquote`
  margin: 0 0 var(--space-2);
  color: var(--color-text);
  line-height: 1.6;
`;

const Role = styled.p`
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-gold-accent);
`;


export default function TestimonialsSection() {
  return (
    <Section id={testimonials.id}>
      <Header>
        <Reveal>
          <Eyebrow>{testimonials.eyebrow}</Eyebrow>
          <SectionHeading>{testimonials.heading}</SectionHeading>
        </Reveal>
      </Header>

      <Marquee speed={45}>
        {testimonials.items.map((item) => (
          <Pair key={item.name + item.quote.slice(0, 10)}>
            <PhotoCard src={item.photo} alt="" />
            <QuoteCard as="figure">
              <TopRow>
                <Name>{item.name}</Name>
                <Stars>★★★★★</Stars>
              </TopRow>
              <Quote>&ldquo;{item.quote}&rdquo;</Quote>
              <Role>{item.role}</Role>
            </QuoteCard>
          </Pair>
        ))}
      </Marquee>
    </Section>
  );
}
