import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

type Props = {
  disabled?: boolean;
  isContentInside?: boolean;
};

const AccordionHeader = styled.div<Props>(
  ({ theme: { colorNew, newTokens }, disabled, isContentInside }) => ({
    backgroundColor: colorNew.gohan,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: 'relative',
    padding: isContentInside ? 0 : rem(16),
    borderRadius: isContentInside ? 0 : newTokens.borderRadius.xsmall,
    '> *:first-child': {
      flex: 1,
    },
  })
);

export default AccordionHeader;
