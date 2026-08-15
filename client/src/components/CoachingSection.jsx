import styled from 'styled-components';
import { coachingSection } from '../content/site-content.js';
import { Section, Container, Eyebrow, SectionHeading } from '../styles/primitives.js';

const CenteredEyebrow = styled(Eyebrow)`
  text-align: center;
`;

const CenteredHeading = styled(SectionHeading)`
  text-align: center;

  .highlight {
    color: var(--color-gold-accent);
  }
`;

const CoachCard = styled.div`
  position: relative;
  display: grid;
  background: var(--color-bg-alt);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-top: var(--space-5);

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  min-height: 280px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: var(--fs-h3);
    margin: 0 0 var(--space-2);
  }

  p {
    color: var(--color-text-muted);
    line-height: 1.6;
    margin: 0;
  }
`;

const RotatingBadge = styled.div`
  display: none;
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  width: 100px;
  height: 100px;

  @media (min-width: 700px) {
    display: block;
  }
`;

const Closing = styled.p`
  text-align: center;
  margin-top: var(--space-5);
  font-weight: 700;
  line-height: 1.6;

  a {
    color: var(--color-gold-accent);
    text-decoration: none;
  }
`;

export default function CoachingSection() {
  return (
    <Section id={coachingSection.id}>
      <Container>
        <CenteredEyebrow>{coachingSection.eyebrow}</CenteredEyebrow>
        <CenteredHeading>{coachingSection.heading}</CenteredHeading>

        <CoachCard>
          <Photo src={coachingSection.photo} alt="" />
          <RotatingBadge aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <path id="coaching-badge-circle" fill="none" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
              <text fontSize="9.2" fontWeight="700" letterSpacing="1.5" fill="var(--color-gold-accent)">
                <textPath href="#coaching-badge-circle">
                  {coachingSection.badge.toUpperCase()} • {coachingSection.badge.toUpperCase()} •{' '}
                </textPath>
              </text>
            </svg>
          </RotatingBadge>
          <Content>
            <h3>{coachingSection.cardHeading}</h3>
            <p>{coachingSection.body}</p>
          </Content>
        </CoachCard>

        <Closing>
          {coachingSection.closingLine}
          <br />
          <a href="#our-doctors">{coachingSection.closingLink}</a>
        </Closing>
      </Container>
    </Section>
  );
}
