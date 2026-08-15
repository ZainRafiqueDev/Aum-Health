
export default function RichHeading({ as: Tag = 'h2', parts, className }) {
  return (
    <Tag className={className}>
      {parts.map((part, i) =>
        typeof part === 'string' ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i} className="highlight">
            {part.highlight}
          </span>
        )
      )}
    </Tag>
  );
}
