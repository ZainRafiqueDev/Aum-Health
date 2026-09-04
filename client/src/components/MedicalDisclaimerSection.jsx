import styled from 'styled-components';
import { medicalDisclaimerSection } from '../content/site-content.js';
import { Section, Container } from '../styles/primitives.js';
import { Reveal } from './motion/Reveal.jsx';

const HowItWorksImage = styled.img.attrs({ loading: 'lazy', decoding: 'async' })`
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  margin: 0 0 var(--space-5);
`;

const DisclaimerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

const DisclaimerBlock = styled.p`
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.7;
  color: var(--color-text-muted);
`;

const DisclaimerHeading = styled.span`
  font-weight: 700;
  color: var(--color-text);
`;

export default function MedicalDisclaimerSection() {
  return (
    <Section id={medicalDisclaimerSection.id}>
      <Container>
        <Reveal>
          <HowItWorksImage src={medicalDisclaimerSection.howItWorksImage} alt={medicalDisclaimerSection.howItWorksImageAlt} />
        </Reveal>

        <Reveal delay={0.1}>
          <DisclaimerList>
            {medicalDisclaimerSection.disclaimers.map((item) => (
              <DisclaimerBlock key={item.heading}>
                <DisclaimerHeading>{item.heading}: </DisclaimerHeading>
                {item.body}
              </DisclaimerBlock>
            ))}
          </DisclaimerList>
        </Reveal>
      </Container>
    </Section>
  );
}
