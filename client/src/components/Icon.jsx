
const paths = {
  stethoscope: (
    <path d="M5 3v6a4 4 0 0 0 8 0V3M9 15a4 4 0 0 0 4-4v-1m3 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  ),
  cursor: <path d="M4 3l6 14 2-6 6-2z" />,
  dollar: (
    <>
      <circle cx="10" cy="10" r="8" />
      <path d="M10 5.5v9M12.5 7.8c0-1-1-1.8-2.5-1.8s-2.5.9-2.5 2c0 2.6 5 1.2 5 3.8 0 1.1-1.1 2-2.5 2s-2.5-.8-2.5-1.8" />
    </>
  ),
  truck: (
    <>
      <path d="M2 5h9v8H2zM11 8h4l3 3v2h-7z" />
      <circle cx="6" cy="15.5" r="1.5" />
      <circle cx="14.5" cy="15.5" r="1.5" />
    </>
  ),
  badge: (
    <>
      <path d="M10 2l2 2 2.8-.3.3 2.8 2 2-2 2 .3 2.8-2.8.3-2 2-2-2-2.8.3-.3-2.8-2-2 2-2-.3-2.8L8 2z" />
      <path d="M7 13.5 6 18l4-1.5 4 1.5-1-4.5" />
    </>
  ),
};

export default function Icon({ name, size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
