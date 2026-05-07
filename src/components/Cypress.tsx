import { forwardRef, Ref } from "react";
import { useIcon } from "../hooks/use-icon";
import type { IconProps } from "../types/icons/icon-types";
import SvgIcon from "../svg/cypress.svg";

const Cypress = (originalProps: IconProps, ref: Ref<SVGSVGElement>) => {
  const { iconProps: props } = useIcon(originalProps);

  return <SvgIcon {...props} ref={ref} />;
};

export default forwardRef(Cypress);
