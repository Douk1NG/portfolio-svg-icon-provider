import { forwardRef, Ref } from "react";
import { useIcon } from "../hooks/use-icon";
import type { IconProps } from "../types/icons/icon-types";
import SvgIcon from "../svg/tailwindcss.svg";

const Tailwindcss = (originalProps: IconProps, ref: Ref<SVGSVGElement>) => {
  const { iconProps: props } = useIcon(originalProps);

  return <SvgIcon {...props} ref={ref} />;
};

export default forwardRef(Tailwindcss);
