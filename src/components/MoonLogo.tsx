export default function MoonLogo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Moon crescent */}
      <path
        d="M32 8C28 8 24.5 9.5 22 12C26 13 29 17 29 22C29 27 26 31 22 32C24.5 34.5 28 36 32 36C40.8 36 48 28.8 48 20C48 11.2 40.8 8 32 8Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Stars */}
      <circle cx="50" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="54" cy="18" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="46" cy="8" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="42" cy="5" r="0.7" fill="currentColor" opacity="0.3" />
      {/* Sparkles */}
      <path
        d="M53 13L53.8 11.5L54.6 13L53.8 14.5Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M48.5 9L49.3 7.5L50.1 9L49.3 10.5Z"
        fill="currentColor"
        opacity="0.25"
      />
    </svg>
  );
}
