import type Position from './Position';

type ContentProps = {
  position?: Position;
  className?: string;
  children?: React.ReactNode;
  container?: HTMLElement | null;
};

export default ContentProps;
