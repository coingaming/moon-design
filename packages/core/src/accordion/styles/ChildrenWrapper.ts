import styled from 'styled-components';
import Size from '../private/Size';
import determineSpacing from '../private/utils/determineSpacing';

type Props = {
  size?: Size;
};

const ChildrenWrapper = styled.div<Props>(({ theme: { newTokens }, size }) => ({
  display: 'block',
  padding: determineSpacing(newTokens, true, size),
}));

export default ChildrenWrapper;
