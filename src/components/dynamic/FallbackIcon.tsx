const FallbackIcon = ({ name, ...props }: { name: string } & React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-label={`Icon "${name}" not found`}
    role="img"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4m0 4h.01" strokeLinecap="round" />
  </svg>
);

export default FallbackIcon;