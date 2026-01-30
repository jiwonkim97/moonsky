export default function MoonLogo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 8C28 8 24.5 9.5 22 12C26 13 29 17 29 22C29 27 26 31 22 32C24.5 34.5 28 36 32 36C40.8 36 48 28.8 48 20C48 11.2 40.8 8 32 8Z"
        fill="currentColor"
      />
      <circle cx="50" cy="12" r="1.5" fill="currentColor" />
      <circle cx="54" cy="18" r="1" fill="currentColor" />
      <circle cx="46" cy="8" r="1" fill="currentColor" />
      <path d="M52 14L53 12L54 14L52 14Z" fill="currentColor" />
      <path d="M48 10L49 8L50 10L48 10Z" fill="currentColor" />
    </svg>
  );
}
