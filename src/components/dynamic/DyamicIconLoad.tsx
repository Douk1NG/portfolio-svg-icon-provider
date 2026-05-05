import { Suspense, memo } from "react";
import { SvgIconName } from "@/types/icons/icon-names";
import { lazy } from "react";
import { useIcon as useIconProps } from "@/hooks/use-icon";
import type { IconProps } from "@/types/icons/icon-types";
import FallbackIcon from "./FallbackIcon";
import IconSkeleton from "./Skeleton";

export type LazySvgProps = IconProps & {
  name: SvgIconName;
};

const cachedIcons = {} as Record<string, React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>>>;

function getIconComponent(name: SvgIconName) {
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
  const SVG = getIconComponent(name);
  const { iconProps } = useIconProps(props);
  return <SVG {...iconProps} />;
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