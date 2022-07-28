import {ReactElement} from "react";

type HeaderProps = {
  leftIcons?: ReactElement[];
  title?: string | ReactElement;
  rightIcons?: ReactElement[];
  isDivider?: boolean;
};

export default HeaderProps;
