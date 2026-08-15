import styled, { css } from 'styled-components';



export const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-4);
`;

export const Section = styled.section`
  padding: var(--space-6) 0;
  ${(props) =>
    props.$alt &&
    css`
      background: var(--color-bg-alt);
    `}
  ${(props) => props.$background && css`background: ${props.$background};`}
`;

export const Eyebrow = styled.p`
  font-size: var(--fs-small);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-navy-600);
  margin: 0 0 var(--space-2);
`;

export const SectionHeading = styled.h2`
  font-size: var(--fs-h2);
  line-height: 1.15;
  margin: 0 0 var(--space-3);
  font-weight: 800;

  .highlight {
    color: var(--color-blue-accent);
  }
`;

export const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 999px;
  padding: 0.9rem 1.75rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;

  ${(props) =>
    props.$variant === 'outline'
      ? css`
          background: transparent;
          color: var(--color-navy-800);
          border: 2px solid var(--color-navy-800);
        `
      : css`
          background: var(--color-navy-800);
          color: #fff;

          &:hover {
            background: var(--color-navy-700);
            transform: translateY(-1px);
            box-shadow: var(--shadow-card);
          }
        `}
`;

export const Checklist = styled.ul`
  list-style: none;
  padding: 0;
  margin: var(--space-3) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

export const ChecklistItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  color: var(--color-text);
`;

export const CheckIcon = styled.span`
  flex: 0 0 auto;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--color-success);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
`;

export const PlaceholderTag = styled.span`
  display: inline-block;
  margin-top: 0.35rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #a15c00;
  background: #fff3da;
  border: 1px solid #f0d8a8;
  border-radius: 999px;
  padding: 0.15rem 0.6rem;
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`;
