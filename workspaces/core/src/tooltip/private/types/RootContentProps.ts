import { Root as RadixRoot } from '@radix-ui/react-tooltip';
import type TooltipRootProps from './TooltipRootProps';

type RootContentProps = TooltipRootProps &
  React.ComponentProps<typeof RadixRoot>;

export default RootContentProps;
