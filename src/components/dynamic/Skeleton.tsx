import { CSSProperties } from "react";

const skeletonStyle = {
  display: "inline-block",
  width: "1em",
  height: "1em",
  borderRadius: "2px",
  backgroundColor: "currentColor",
  opacity: 0.15,
  animation: "icon-pulse 1.4s ease-in-out infinite",
} as CSSProperties;

const IconSkeleton = () => (
  <>
    <style>{`
      @keyframes icon-pulse {
        0%, 100% { opacity: 0.15; }
        50% { opacity: 0.3; }
      }
    `}</style>
    <span aria-hidden style={skeletonStyle} />
  </>
);

export default IconSkeleton;