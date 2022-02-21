import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

type Props = {
  disabled?: boolean;
};

const AccordionHeader = styled.div<Props>(
  ({ theme: { colorNew }, disabled }) => ({
    backgroundColor: colorNew.gohan,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: 'relative',
    '> *:first-child': {
      flex: 1,
    },
  })
);

export default AccordionHeader;
