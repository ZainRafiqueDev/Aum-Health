import styled from 'styled-components';
import Nav from './Nav.jsx';
import GuaranteeStrip from './GuaranteeStrip.jsx';
import Footer from './Footer.jsx';
import { Container, PlaceholderTag } from '../styles/primitives.js';

const Main = styled.main`
  padding: calc(var(--space-6) + 40px) 0 var(--space-6);
  background: #fff;
`;

const Inner = styled(Container)`
  max-width: 820px;
`;

const Title = styled.h1`
  font-size: var(--fs-h1);
  line-height: 1.1;
  margin: 0 0 var(--space-2);
`;

const LastUpdated = styled.p`
  color: var(--color-text-muted);
  font-size: var(--fs-small);
  margin: 0 0 var(--space-3);
`;

const ReviewNotice = styled.div`
  background: var(--color-bg-panel);
  border-radius: var(--radius-md);
  padding: var(--space-3);
  margin-bottom: var(--space-5);
  font-size: var(--fs-small);
  color: var(--color-text-muted);
  line-height: 1.6;
`;

const Intro = styled.div`
  margin-bottom: var(--space-4);

  p {
    color: var(--color-text);
    line-height: 1.7;
    margin: 0 0 var(--space-2);
    font-weight: 600;
  }
`;

const SectionBlock = styled.section`
  margin-bottom: var(--space-4);

  h2 {
    font-size: var(--fs-h3);
    margin: 0 0 var(--space-2);
  }
`;

const Paragraph = styled.p`
  color: var(--color-text);
  line-height: 1.7;
  margin: 0 0 var(--space-2);
`;

const ListItem = styled.p`
  color: var(--color-text);
  line-height: 1.7;
  margin: 0 0 var(--space-1) var(--space-3);
`;

export default function LegalPage({ content }) {
  return (
    <>
      <Nav alwaysSolid />
      <Main>
        <Inner>
          <Title>{content.title}</Title>
          <LastUpdated>Last updated: {content.lastUpdated}</LastUpdated>

          

          {content.intro?.length > 0 && (
            <Intro>
              {content.intro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </Intro>
          )}

          {content.sections.map((section) => (
            <SectionBlock key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, i) =>
                paragraph.startsWith('- ') ? (
                  <ListItem key={i}>{paragraph}</ListItem>
                ) : (
                  <Paragraph key={i}>{paragraph}</Paragraph>
                )
              )}
            </SectionBlock>
          ))}
        </Inner>
      </Main>
      <GuaranteeStrip />
      <Footer />
    </>
  );
}
