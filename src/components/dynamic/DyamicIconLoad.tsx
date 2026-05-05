import { Suspense, memo } from "react";
import { SvgIconName } from "@/types/icons/icon-names";
import { lazy } from "react";
import FallbackIcon from "./FallbackIcon";
import IconSkeleton from "./Skeleton";

export type LazySvgProps = React.SVGProps<SVGSVGElement> & {
  name: SvgIconName;
};

const cachedIcons = {} as Record<string, React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>>>;

export function useIcon(name: SvgIconName) {
  if (!cachedIcons[name]) {
    cachedIcons[name] = lazy(() =>
      import(`@/svg/${name}.svg`).catch(() => ({
        default: (props: React.SVGProps<SVGSVGElement>) => (
          <FallbackIcon name={name} {...props} />
        ),
      }))
    );
  }
  return cachedIcons[name];
}


const IconInner = ({ name, ...props }: LazySvgProps) => {
  const SVG = useIcon(name);
  return <SVG {...props} />;
};

const Icon = memo(({ name, ...props }: LazySvgProps) => (
  <Suspense fallback={<IconSkeleton />}>
    <IconInner
      name={name}
      {...props}
    />
  </Suspense>
));

export default Icon;