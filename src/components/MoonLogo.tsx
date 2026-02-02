export default function MoonLogo({ size = 48 }: { size?: number }) {
  const id = `moon-logo-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Moon gradient - warm gold to soft amber */}
        <radialGradient id={`${id}-moon`} cx="0.3" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#f0e4b8" />
          <stop offset="50%" stopColor="#d4c48a" />
          <stop offset="100%" stopColor="#b8a46a" />
        </radialGradient>
        {/* Glow effect */}
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#d4c48a" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#d4c48a" stopOpacity="0" />
        </radialGradient>
        {/* Star sparkle gradient */}
        <radialGradient id={`${id}-star`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f5edd5" />
          <stop offset="100%" stopColor="#c9b87a" stopOpacity="0.6" />
        </radialGradient>
      </defs>

      {/* Outer glow halo */}
      <circle cx="24" cy="28" r="22" fill={`url(#${id}-glow)`} />

      {/* Subtle full moon outline */}
      <circle
        cx="24"
        cy="28"
        r="17"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.12"
      />

      {/* Moon crescent - refined shape */}
      <path
        d="M24 11C17.4 11 12 16.4 12 23C12 26.2 13.3 29.1 15.4 31.2C17.5 33.3 20.4 34.6 23.6 34.6C15.8 32.8 15.8 23.2 23.6 11.4C23.7 11.1 23.9 11 24 11Z"
        fill={`url(#${id}-moon)`}
        opacity="0"
      />
      {/* Better crescent using clip approach */}
      <circle cx="24" cy="28" r="15" fill={`url(#${id}-moon)`} />
      <circle cx="33" cy="24" r="13" fill="#070b1a" />

      {/* Crescent inner edge highlight */}
      <path
        d="M20 13.5C14.5 16.5 11 22 11 28C11 34 14.5 39.5 20 42.5"
        stroke="#f5edd5"
        strokeWidth="0.5"
        opacity="0.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Primary star - 4-point sparkle */}
      <g transform="translate(48, 14)">
        <path
          d="M0 -4.5C0.6 -1.2 1.2 -0.6 4.5 0C1.2 0.6 0.6 1.2 0 4.5C-0.6 1.2 -1.2 0.6 -4.5 0C-1.2 -0.6 -0.6 -1.2 0 -4.5Z"
          fill={`url(#${id}-star)`}
        />
      </g>

      {/* Secondary star - smaller sparkle */}
      <g transform="translate(42, 8)">
        <path
          d="M0 -2.5C0.4 -0.8 0.8 -0.4 2.5 0C0.8 0.4 0.4 0.8 0 2.5C-0.4 0.8 -0.8 0.4 -2.5 0C-0.8 -0.4 -0.4 -0.8 0 -2.5Z"
          fill="currentColor"
          opacity="0.5"
        />
      </g>

      {/* Tiny accent stars */}
      <circle cx="55" cy="22" r="1" fill="currentColor" opacity="0.45" />
      <circle cx="52" cy="30" r="0.7" fill="currentColor" opacity="0.25" />
      <circle cx="38" cy="6" r="0.8" fill="currentColor" opacity="0.35" />
      <circle cx="58" cy="10" r="0.6" fill="currentColor" opacity="0.2" />

      {/* Tiny star dots trailing from moon */}
      <circle cx="45" cy="38" r="0.5" fill="currentColor" opacity="0.18" />
      <circle cx="50" cy="42" r="0.4" fill="currentColor" opacity="0.12" />
    </svg>
  );
}
