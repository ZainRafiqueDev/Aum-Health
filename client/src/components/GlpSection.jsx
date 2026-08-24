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

const PricingGrid = styled.div`
  display: grid;
  gap: var(--space-3);
  margin: var(--space-1) 0 var(--space-4);

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const PricingCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-3);
  box-shadow: var(--shadow-card);
`;

const PricingTitle = styled.h4`
  font-size: 1.15rem;
  margin: 0 0 var(--space-1);
`;

const PricingPrice = styled.p`
  margin: 0 0 var(--space-2);
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-navy-900);

  span {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-text-muted);
  }
`;

const PricingBody = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
`;

const PricingImage = styled.img.attrs({ loading: 'lazy', decoding: 'async' })`
  flex: 0 0 auto;
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: var(--radius-sm);
`;

const PricingDescription = styled.p`
  margin: 0;
  font-size: var(--fs-small);
  color: var(--color-text-muted);
`;

const PricingDivider = styled.hr`
  border: none;
  border-top: 1px solid var(--color-border);
  margin: 0 0 var(--space-2);
`;

const PricingChecklist = styled(Checklist)`
  margin: 0 0 var(--space-3);
  gap: var(--space-1);
`;

const PricingBtn = styled(Btn)`
  width: 100%;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-top: auto;
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
                {glpSection.pricingCards && (
                  <PricingGrid>
                    {glpSection.pricingCards.map((card, i) => (
                      <PricingCard
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                        whileHover={{ y: -6, scale: 1.015 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <PricingTitle>{card.title}</PricingTitle>
                        <PricingPrice>
                          {card.price} <span>{card.priceNote}</span>
                        </PricingPrice>
                        <PricingBody>
                          <PricingImage src={card.image} alt="" />
                          <PricingDescription>{card.description}</PricingDescription>
                        </PricingBody>
                        <PricingDivider />
                        <PricingChecklist>
                          {card.checklist.map((item) => (
                            <ChecklistItem key={item}>
                              <CheckIcon>✓</CheckIcon>
                              {item}
                            </ChecklistItem>
                          ))}
                        </PricingChecklist>
                        <PricingBtn href={card.cta.href}>{card.cta.label}</PricingBtn>
                      </PricingCard>
                    ))}
                  </PricingGrid>
                )}
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
