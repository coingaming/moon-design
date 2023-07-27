import { Trigger as RadixTrigger } from '@radix-ui/react-tooltip';
import type TriggerProps from './TriggerProps';

type TriggerComponentProps = TriggerProps &
  React.ComponentProps<typeof RadixTrigger>;

export default TriggerComponentProps;
