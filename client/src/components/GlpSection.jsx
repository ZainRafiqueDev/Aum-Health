import styled from 'styled-components';
import { glpSection } from '../content/site-content.js';
import RichHeading from './RichHeading.jsx';
import { Section, Container, Eyebrow, SectionHeading, Checklist, ChecklistItem, CheckIcon, Btn } from '../styles/primitives.js';
import { FeatureGrid, Aside, ProductWrap, ProductImage, ChecklistCaption, Main, Collage, CollageImg, Closing } from './FeatureLayout.js';
import { motion, Reveal, ZoomIn, StaggerItem, hoverLift } from './motion/Reveal.jsx';

const FeaturesGrid = styled(motion.create(Container))`
  display: grid;
  gap: var(--space-3);
  margin-top: var(--space-6);

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const featuresGridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const FeatureCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  background: var(--color-bg-alt);
  border-radius: var(--radius-md);

  h3 {
    margin: 0 0 var(--space-1);
    font-size: var(--fs-h3);
  }

  p {
    margin: 0;
    color: var(--color-text-muted);
  }
`;

const FeatureCardImage = styled.img.attrs({ loading: 'lazy', decoding: 'async' })`
  width: 100px;
  height: 100px;
  flex: 0 0 auto;
  object-fit: cover;
  border-radius: var(--radius-md);
`;

const Disclaimer = styled(Container).attrs({ as: 'p' })`
  margin-top: var(--space-4);
  font-size: 0.75rem;
  color: var(--color-text-muted);
`;

const ClosingImageWrap = styled(motion.div)`
  width: 100%;
  max-width: 380px;
  aspect-ratio: 1402 / 1122;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin: var(--space-1) 0 var(--space-4);
  box-shadow: 0 20px 40px -20px rgba(28, 51, 72, 0.4);
`;

const ClosingImage = styled.img.attrs({ loading: 'lazy', decoding: 'async' })`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function GlpSection() {
  return (
    <Section id={glpSection.id} $background="var(--tint-weightloss)">
      <Container>
        <FeatureGrid>
          <Aside>
            <ZoomIn>
              <ProductWrap>
                <ProductImage src={glpSection.productImage} alt="" />
              </ProductWrap>
            </ZoomIn>

            <Reveal delay={0.15}>
              <ChecklistCaption>{glpSection.checklistCaption}</ChecklistCaption>
              <Checklist>
                {glpSection.checklist.map((item) => (
                  <ChecklistItem key={item}>
                    <CheckIcon>✓</CheckIcon>
                    {item}
                  </ChecklistItem>
                ))}
              </Checklist>
            </Reveal>
          </Aside>

          <Main>
            <Reveal>
              <Eyebrow>{glpSection.eyebrow}</Eyebrow>
              <RichHeading as={SectionHeading} parts={glpSection.headingParts} />
            </Reveal>

            <Collage>
              {glpSection.collageImages.map((img, i) => (
                <ZoomIn key={img.src} delay={i * 0.12}>
                  <CollageImg src={img.src} alt={img.alt} $offset={i === 1} />
                </ZoomIn>
              ))}
            </Collage>

            <Reveal delay={0.1}>
              <Closing>
                <h3>{glpSection.secondaryHeading}</h3>
                <p>{glpSection.secondaryBody}</p>
                {glpSection.secondaryImage && (
                  <ClosingImageWrap
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ClosingImage src={glpSection.secondaryImage.src} alt={glpSection.secondaryImage.alt} />
                  </ClosingImageWrap>
                )}
                <Btn href={glpSection.cta.href}>{glpSection.cta.label}</Btn>
              </Closing>
            </Reveal>
          </Main>
        </FeatureGrid>
      </Container>

      <FeaturesGrid initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={featuresGridVariants}>
        {glpSection.features.map((feature) => (
          <StaggerItem key={feature.title}>
            <FeatureCard {...hoverLift}>
              <FeatureCardImage src={feature.image} alt="" />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            </FeatureCard>
          </StaggerItem>
        ))}
      </FeaturesGrid>

      <Disclaimer>{glpSection.disclaimer}</Disclaimer>
    </Section>
  );
}
