import type GroupProps from './GroupProps';
import type WithChildren from './WithChildren';

type GroupComponentProps = (
  props: WithChildren<GroupProps>
) => React.ReactElement | null;

export default GroupComponentProps;
