import { Suspense, lazy, memo, createElement, type ComponentType, type SVGProps } from 'react';
import { useIcon as useIconProps } from '../../hooks/use-icon';
import type { IconProps } from '../../types/icons/icon-types';
import type { SvgIconName } from '../../types/icons/icon-names';
import { loadIcon } from '../../hooks/use-icon-loaders';
import FallbackIcon from './FallbackIcon';
import IconSkeleton from './Skeleton';

export type LazySvgProps = IconProps & {
  name: SvgIconName;
};

const cachedIcons = {} as Record<
  SvgIconName,
  React.LazyExoticComponent<ComponentType<SVGProps<SVGSVGElement>>>
>;

function getIconComponent(name: SvgIconName) {
  if (!cachedIcons[name]) {
    cachedIcons[name] = lazy(() =>
      loadIcon(name).catch(() => ({
        default: (props: SVGProps<SVGSVGElement>) => <FallbackIcon name={name} {...props} />,
      })),
    );
  }

  return cachedIcons[name];
}

const IconInner = ({ name, ...props }: LazySvgProps) => {
  const TargetIcon = getIconComponent(name);
  const { iconProps } = useIconProps(props);
  return createElement(TargetIcon, iconProps);
};

IconInner.displayName = 'IconInner';

const Icon = memo(({ name, ...props }: LazySvgProps) => (
  <Suspense fallback={<IconSkeleton />}>
    <IconInner name={name} {...props} />
  </Suspense>
));

Icon.displayName = 'Icon';

export default Icon;
