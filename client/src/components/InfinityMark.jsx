
export default function InfinityMark({ color = 'currentColor', glow = '#ffffff', size = 28 }) {
  const id = `infinity-glow-${color.replace('#', '')}`;
  return (
    <svg width={size} height={size * 0.57} viewBox="0 0 112 64" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={glow} stopOpacity="1" />
          <stop offset="100%" stopColor={glow} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="28" cy="32" r="26" stroke={color} strokeWidth="4" />
      <circle cx="84" cy="32" r="26" stroke={color} strokeWidth="4" />
      <circle cx="56" cy="32" r="10" fill={`url(#${id})`} />
      <circle cx="56" cy="32" r="3" fill={glow} />
    </svg>
  );
}
