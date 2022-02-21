import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const ChildrenWrapper = styled.div(() => ({
  display: 'block',
  padding: `${rem(20)} ${rem(24)}`,
}));

export default ChildrenWrapper;
