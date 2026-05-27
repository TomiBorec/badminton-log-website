export function Shuttlecock({ size = 24 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.22,
        background: 'var(--fg)',
        color: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg
        width={size * 0.78}
        height={size * 0.78}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9.2" />
        <rect x="5.6" y="8.6" width="4.6" height="6.8" rx="2.3" />
        <rect x="13.8" y="8.6" width="4.6" height="6.8" rx="2.3" />
        <circle cx="12" cy="10.6" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="12" cy="13.4" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}
