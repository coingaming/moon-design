import { Content as RadixContent } from '@radix-ui/react-tooltip';
import type ContentProps from './ContentProps';

type ContentComponentProps = ContentProps &
  React.ComponentProps<typeof RadixContent>;

export default ContentComponentProps;
