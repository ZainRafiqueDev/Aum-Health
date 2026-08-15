import styled from 'styled-components';
import { footer, brand } from '../content/site-content.js';
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

const Legal = styled.div`
  font-size: 0.75rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 900px;
`;

const PlaceholderCopy = styled.p`
  font-style: italic;
`;

const Pharmacies = styled.div`
  h3 {
    font-size: var(--fs-small);
    margin-bottom: 0.25rem;
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
          <p>{footer.contact.phone}</p>
          <p>{footer.contact.address}</p>
        </Brand>

        <Legal>
          {footer.legalDisclaimer?.length > 0 ? (
            footer.legalDisclaimer.map((paragraph, i) => <p key={i}>{paragraph}</p>)
          ) : (
            <PlaceholderCopy>
              [Placeholder — full legal disclaimer copy about licensed providers, compounded
              medication risk, and doctor-patient relationship to be supplied by {brand.name} and
              inserted here.]
            </PlaceholderCopy>
          )}

          {footer.resultsDisclaimer?.length > 0 ? (
            footer.resultsDisclaimer.map((paragraph, i) => <p key={i}>{paragraph}</p>)
          ) : (
            <PlaceholderCopy>
              [Placeholder — results/claims disclaimer to be supplied by {brand.name}.]
            </PlaceholderCopy>
          )}

          <Pharmacies>
            <h3>Pharmacy Providers</h3>
            {footer.pharmacyBlurb && <p>{footer.pharmacyBlurb}</p>}
            {footer.pharmacyPartners.length > 0 ? (
              <ul>
                {footer.pharmacyPartners.map((p) => (
                  <li key={p.name}>{p.name}</li>
                ))}
              </ul>
            ) : (
              <PlaceholderCopy>[Placeholder — named pharmacy partners pending client confirmation.]</PlaceholderCopy>
            )}
          </Pharmacies>
        </Legal>

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
