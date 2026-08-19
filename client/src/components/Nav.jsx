import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Logo from './Logo.jsx';
import { nav } from '../content/site-content.js';
import { Container } from '../styles/primitives.js';

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  transform: translateY(0);
  transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.3s ease;

  ${(props) =>
    props.$hidden &&
    css`
      transform: translateY(-100%);
    `}

  ${(props) =>
    props.$scrolled &&
    css`
      background: #ffffff;
      box-shadow: 0 4px 20px rgba(15, 32, 56, 0.08);
    `}
`;

const NavInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  padding-top: var(--space-2);
  padding-bottom: var(--space-2);

  @media (min-width: 480px) {
    gap: var(--space-3);
  }
`;

const LogoLink = styled.a`
  text-decoration: none;
  flex: 0 1 auto;
  min-width: 0;
  transform-origin: left center;
  transform: scale(0.85);

  @media (min-width: 420px) {
    transform: none;
  }
`;

const LoginLink = styled.a`
  margin-left: auto;
  flex: 0 0 auto;
  text-decoration: none;
  font-weight: 700;
  font-size: var(--fs-small);
  white-space: nowrap;
  color: ${(props) => (props.$scrolled ? 'var(--color-navy-800)' : '#ffffff')};
  padding: 0.5rem 0.4rem;

  @media (min-width: 480px) {
    padding: 0.5rem 0.75rem;
  }
`;

const MenuToggle = styled.button`
  flex: 0 0 auto;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.$scrolled ? 'var(--color-bg-alt)' : 'rgba(255, 255, 255, 0.15)')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;

  span {
    width: 16px;
    height: 2px;
    background: ${(props) => (props.$scrolled ? 'var(--color-navy-800)' : '#ffffff')};
    border-radius: 2px;
  }

  @media (min-width: 480px) {
    width: 40px;
    height: 40px;

    span {
      width: 18px;
    }
  }
`;

const Scrim = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 32, 56, 0.4);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
  z-index: 199;

  ${(props) =>
    props.$open &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

const Popup = styled.div`
  position: fixed;
  top: var(--space-3);
  right: var(--space-3);
  bottom: var(--space-3);
  width: min(340px, calc(88vw - 2 * var(--space-3)));
  background: #ffffff;
  border-radius: var(--radius-lg);
  box-shadow: 0 20px 50px rgba(15, 32, 56, 0.25);
  z-index: 200;
  display: flex;
  flex-direction: column;
  transform: translateX(calc(100% + var(--space-3)));
  transition: transform 0.3s ease;
  padding: var(--space-3) var(--space-4) var(--space-4);
  overflow: hidden;

  ${(props) =>
    props.$open &&
    css`
      transform: translateX(0);
    `}
`;

const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--space-2);
`;

const PopupClose = styled.button`
  border: none;
  background: var(--color-bg-alt);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--color-text-muted);
`;

const PopupLinks = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: var(--color-text);
    font-weight: 600;
    padding: 0.85rem var(--space-2);
    margin: 0 calc(var(--space-2) * -1);
    border-bottom: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    transition: transform 0.18s ease, color 0.18s ease, background 0.18s ease;
  }

  a span {
    color: var(--color-text-muted);
    transition: transform 0.18s ease, color 0.18s ease;
  }

  a:hover {
    color: var(--color-navy-800);
    background: var(--color-bg-alt);
    font-weight: 800;
    transform: translateX(6px);
  }

  a:hover span {
    color: var(--color-navy-800);
    transform: translateX(3px);
  }
`;

const PopupFooter = styled.div`
  display: flex;
  gap: var(--space-4);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);

  a {
    text-decoration: none;
    color: var(--color-navy-700);
    font-weight: 600;
    font-size: var(--fs-small);
  }
`;

export default function Nav({ alwaysSolid = false }) {
  const [scrolledState, setScrolled] = useState(false);
  const scrolled = alwaysSolid || scrolledState;
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
     
      if (y > lastY && y > 120) {
        setHidden(true);
      } else if (y < lastY - 4 || y <= 120) {
        setHidden(false);
      }
      lastY = y;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header>
      <NavBar $scrolled={scrolled} $hidden={hidden && !menuOpen}>
        <NavInner>
          <LogoLink href="/" onClick={handleLinkClick}>
            <Logo light={!scrolled} />
          </LogoLink>

          <LoginLink
            href={nav.loginLink.href}
            $scrolled={scrolled}
            target="_blank"
            rel="noopener noreferrer"
          >
            {nav.loginLink.label}
          </LoginLink>

          <MenuToggle
            type="button"
            $scrolled={scrolled}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </MenuToggle>
        </NavInner>
      </NavBar>

      <Scrim $open={menuOpen} onClick={handleLinkClick} />

      <Popup $open={menuOpen} aria-hidden={!menuOpen}>
        <PopupHeader>
          <Logo />
          <PopupClose type="button" aria-label="Close menu" onClick={handleLinkClick}>
            ✕
          </PopupClose>
        </PopupHeader>

        <PopupLinks aria-label="All sections">
          {nav.popupLinks.map((link) => {
            const isExternal = /^https?:\/\//.test(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
                <span aria-hidden="true">›</span>
              </a>
            );
          })}
        </PopupLinks>

        <PopupFooter>
          {nav.popupFooterLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
        </PopupFooter>
      </Popup>
    </header>
  );
}
