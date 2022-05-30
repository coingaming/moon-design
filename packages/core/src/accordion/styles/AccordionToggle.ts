import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

type Props = {
  disabled?: boolean;
};

const AccordionToggle = styled.button<Props>(
  ({ theme: { colorNew }, disabled }) => ({
    verticalAlign: 'middle',
    fontSize: rem(8),
    lineHeight: 0,
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: colorNew.trunks,
    borderColor: 'transparent',
    backgroundColor: colorNew.gohan,
  })
);

export default AccordionToggle;
