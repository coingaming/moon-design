import styled from 'styled-components';

type Props = {
  isMultiline?: boolean;
};

const BodyContent = styled.div<Props>(({ isMultiline = true }) => ({
  display: isMultiline ? 'block' : 'flex',
  alignContent: 'center',
  verticalAlign: 'middle',
}));

export default BodyContent;
