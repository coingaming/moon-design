import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const AccordionWrapper = styled.div(({ theme: { colorNew, newTokens } }) => ({
  padding: `${rem(20)} ${rem(16)}`,
  backgroundColor: colorNew.gohan,
  width: '100%',
  borderRadius: newTokens.borderRadius.medium,
  height: 'max-content',
}));

export default AccordionWrapper;
