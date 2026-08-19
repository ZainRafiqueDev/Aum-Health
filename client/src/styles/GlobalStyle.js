import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  :root {
    /* Brand */
    --color-navy-900: #1c3348;
    --color-navy-800: #2b4864;
    --color-navy-700: #3a6690;
    --color-navy-600: #5d89b7;
    --color-blue-accent: #9fc3e6;
    --color-blue-accent-light: #eaf3fb;
    --color-gold-accent: #c9a575;
    --color-gold-bright: #dba84f;
    --color-grey-wordmark: #8a8f99;

    /* Semantic */
    --color-bg: #ffffff;
    --color-bg-alt: #f6f9fc;
    --color-bg-panel: #eaf3fb;
    --color-text: #16223a;
    --color-text-muted: #55647d;
    --color-text-on-dark: #ffffff;
    --color-text-on-dark-muted: #c4d3e6;
    --color-border: #e1e8f2;
    --color-success: #2f9e6c;

    /* Type */
    --font-sans: 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif;
    --fs-h1: clamp(2.25rem, 4vw + 1rem, 3.6rem);
    --fs-h2: clamp(1.75rem, 2.5vw + 1rem, 2.75rem);
    --fs-h3: 1.375rem;
    --fs-body: 1rem;
    --fs-small: 0.875rem;

    /* Layout */
    --max-width: 1200px;
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 28px;
    --space-1: 0.5rem;
    --space-2: 1rem;
    --space-3: 1.5rem;
    --space-4: 2rem;
    --space-5: 3rem;
    --space-6: 5rem;
    --shadow-card: 0 20px 45px -20px rgba(15, 32, 56, 0.25);

    /* Per-section pastel tints */
    --tint-weightloss: #eef6f0;
    --tint-weightloss-accent: #4a9d6f;
    --tint-supplements: #f1eefa;
    --tint-supplements-accent: #8b6fc9;
    --tint-sexual-health: #f7f0e6;
    --tint-sexual-health-accent: #b98a4e;
    --tint-mens-health: #efe6d8;
    --tint-mens-health-accent: #8a6a4a;
    --tint-hair: #faf3e6;
    --tint-hair-accent: var(--color-gold-accent);
    --tint-womens-health: #fbeef2;
    --tint-womens-health-accent: #c4708f;
    --tint-skincare: #eaf3f0;
    --tint-skincare-accent: #4a9d8f;
    --tint-peptides: #eceffb;
    --tint-peptides-accent: #6b7fd7;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
  }

  body {
    margin: 0;
    font-family: var(--font-sans);
    color: var(--color-text);
    background: var(--color-bg);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    width: 100%;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
  }

  /* Hide the scrollbar chrome while keeping scroll functionality —
     matches the reference site's chromeless scroll feel. */
  * {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  *::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export default GlobalStyle;
