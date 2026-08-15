import styled from 'styled-components';
import { doctorsSection } from '../content/site-content.js';
import { Section, Container, Eyebrow, SectionHeading, Card, PlaceholderTag } from '../styles/primitives.js';

const Header = styled.div`
  max-width: 700px;
  margin: 0 auto var(--space-5);
  text-align: center;
`;

const Body = styled.p`
  color: var(--color-text-muted);
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  gap: var(--space-3);
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const DoctorCard = styled(Card)`
  padding: var(--space-4);
  text-align: center;
`;

const Photo = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto var(--space-2);
`;

const Name = styled.p`
  font-weight: 700;
  margin: 0;
`;

const Credential = styled.p`
  color: var(--color-text-muted);
  font-size: var(--fs-small);
  margin: 0.15rem 0 0;
`;

export default function DoctorsSection() {
  return (
    <Section id={doctorsSection.id} $alt>
      <Container>
        <Header>
          <Eyebrow>{doctorsSection.eyebrow}</Eyebrow>
          <SectionHeading>{doctorsSection.heading}</SectionHeading>
          <Body>{doctorsSection.body}</Body>
          {doctorsSection.isPlaceholderContent && (
            <PlaceholderTag>Provider bios pending — clinical partner network</PlaceholderTag>
          )}
        </Header>

        <Grid>
          {doctorsSection.doctors.map((doc) => (
            <DoctorCard key={doc.photo}>
              <Photo src={doc.photo} alt="" />
              <Name>{doc.name}</Name>
              <Credential>{doc.credential}</Credential>
            </DoctorCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
