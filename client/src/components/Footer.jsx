import styled from 'styled-components';
import { footer } from '../content/site-content.js';
import Logo from './Logo.jsx';
import { Container } from '../styles/primitives.js';

const FooterEl = styled.footer`
  background: var(--color-bg-alt);
  border-top: 1px solid var(--color-border);
  padding: var(--space-5) 0 var(--space-4);
`;

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const Brand = styled.div`
  p {
    margin: 0.25rem 0;
    color: var(--color-text-muted);
    font-size: var(--fs-small);
  }
`;

const PolicyLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-3);
  font-size: var(--fs-small);
  font-weight: 600;

  a {
    text-decoration: none;
    color: var(--color-navy-700);
  }
`;

const Copyright = styled.p`
  font-size: var(--fs-small);
  color: var(--color-text-muted);
  margin: 0;
`;

export default function Footer() {
  return (
    <FooterEl>
      <Inner>
        <Brand>
          <Logo />
          <p>{footer.contact.email}</p>
          {footer.contact.address && <p>{footer.contact.address}</p>}
        </Brand>

        <PolicyLinks aria-label="Policies">
          {footer.policyLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </PolicyLinks>

        <Copyright>{footer.copyright}</Copyright>
      </Inner>
    </FooterEl>
  );
}
