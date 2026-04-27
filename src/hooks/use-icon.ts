import type { IconProps } from "../types/icons/icon-types";

export type UseIconReturn = {
  iconProps: IconProps;
};

export const useIcon = (props: IconProps): UseIconReturn => {
  const { size = "1em", ...rest } = props;

  return {
    iconProps: {
      width: size,
      height: size,
      ...rest,
    },
  };
};
