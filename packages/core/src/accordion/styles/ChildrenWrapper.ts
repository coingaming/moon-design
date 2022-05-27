import styled from 'styled-components';
import setSpacing from '../private/utils/setSpacing';
import type SizeProps from '../private/SizeProps';

type Props = {
  size?: SizeProps;
};

const ChildrenWrapper = styled.div<Props>(({ size }) => ({
  display: 'block',
  padding: setSpacing(true, size),
}));

export default ChildrenWrapper;
