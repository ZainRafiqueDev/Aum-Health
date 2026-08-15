import styled from 'styled-components';
import RichHeading from './RichHeading.jsx';
import { Section, Container, Eyebrow, SectionHeading, Checklist, ChecklistItem, CheckIcon, Btn, PlaceholderTag } from '../styles/primitives.js';
import { FeatureGrid, Aside, ProductWrap, ProductImage, ChecklistCaption, Main, Collage, CollageImg, Closing, ComingSoonBadge, SplitRow } from './FeatureLayout.js';
import { Reveal, ZoomIn } from './motion/Reveal.jsx';

const TintedSection = styled(Section)`
  ${(props) =>
    props.$tint &&
    (props.$dark
      ? `background: color-mix(in srgb, var(--tint-${props.$tint}) 55%, var(--tint-${props.$tint}-accent) 45%);`
      : `background: var(--tint-${props.$tint});`)}
`;


export default function FeatureSection({
  id,
  tint,
  dark,
  eyebrow,
  headingParts,
  productImage,
  imagePlaceholder,
  checklistCaption,
  checklist,
  collageImages,
  secondaryHeading,
  secondaryBody,
  cta,
  comingSoon,
}) {
  const hasProduct = Boolean(productImage);

  const benefits = checklist && (
    <>
      {checklistCaption && <ChecklistCaption>{checklistCaption}</ChecklistCaption>}
      <Checklist>
        {checklist.map((item) => (
          <ChecklistItem key={item}>
            <CheckIcon>✓</CheckIcon>
            {item}
          </ChecklistItem>
        ))}
      </Checklist>
    </>
  );

  const closingContent = (
    <>
      {secondaryHeading && <h3>{secondaryHeading}</h3>}
      {secondaryBody && <p>{secondaryBody}</p>}

      {comingSoon ? (
        <ComingSoonBadge $tint={tint}>Coming Soon</ComingSoonBadge>
      ) : (
        cta && <Btn href={cta.href}>{cta.label}</Btn>
      )}
    </>
  );

  return (
    <TintedSection id={id} $tint={tint} $dark={dark}>
      <Container>
        <FeatureGrid $singleColumn={!hasProduct}>
          {hasProduct && (
            <Aside>
              <ZoomIn>
                <ProductWrap>
                  <ProductImage src={productImage} alt="" />
                </ProductWrap>
              </ZoomIn>

              <Reveal delay={0.15}>{benefits}</Reveal>
            </Aside>
          )}

          <Main>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
              <RichHeading as={SectionHeading} parts={headingParts} />
            </Reveal>

            {collageImages && (
              <Collage>
                {collageImages.map((img, i) => (
                  <ZoomIn key={img.src} delay={i * 0.12}>
                    <CollageImg src={img.src} alt={img.alt} $offset={i === 1} />
                  </ZoomIn>
                ))}
              </Collage>
            )}

            {hasProduct ? (
              <Reveal delay={0.1}>
                <Closing>{closingContent}</Closing>
              </Reveal>
            ) : (
              <SplitRow>
                <Reveal>{benefits}</Reveal>
                <Reveal delay={0.1}>
                  <Closing>{closingContent}</Closing>
                </Reveal>
              </SplitRow>
            )}
          </Main>
        </FeatureGrid>
      </Container>
    </TintedSection>
  );
}
