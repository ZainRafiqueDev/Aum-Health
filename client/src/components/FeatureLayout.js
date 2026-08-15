import styled from 'styled-components';


export const FeatureGrid = styled.div`
  display: grid;
  gap: var(--space-5);

  @media (min-width: 900px) {
    grid-template-columns: ${(props) => (props.$singleColumn ? '1fr' : '0.85fr 1.15fr')};
  }
`;

export const SplitRow = styled.div`
  display: grid;
  gap: var(--space-5);
  margin: var(--space-4) 0;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductWrap = styled.div`
  position: relative;
  display: inline-flex;
  max-width: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  margin-bottom: var(--space-4);
`;

export const ProductImage = styled.img`
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 320px;
  margin: 0 auto;
  object-fit: contain;
`;

export const ChecklistCaption = styled.h3`
  font-size: 1.05rem;
  margin: 0 0 var(--space-2);
`;

export const Main = styled.div`
  .eyebrow {
    margin-bottom: var(--space-2);
  }
`;

export const Collage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
  margin: var(--space-4) 0;
  /* Grid items default to min-width: auto, which for an <img> means the
     browser won't shrink the column below the image's intrinsic width —
     this is what was pushing the second/offset photo past the container
     edge regardless of width:100% on the image itself. */
  min-width: 0;
`;

export const CollageImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 4 / 3;
  min-width: 0;
  object-fit: cover;
  border-radius: var(--radius-lg);
  ${(props) => props.$offset && 'margin-top: var(--space-4);'}
`;

export const Closing = styled.div`
  h3 {
    font-size: var(--fs-h3);
    margin: 0 0 var(--space-2);
  }

  p {
    color: var(--color-text-muted);
    margin: 0 0 var(--space-3);
  }
`;

export const ComingSoonBadge = styled.span`
  display: inline-block;
  font-weight: 700;
  border-radius: 999px;
  padding: 0.65rem 1.4rem;
  font-size: var(--fs-small);
  color: ${(props) => (props.$tint ? '#fff' : 'var(--color-navy-700)')};
  background: ${(props) => (props.$tint ? `var(--tint-${props.$tint}-accent)` : 'var(--color-bg-panel)')};
`;
