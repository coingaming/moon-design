import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

type Props = {
  isContentInside?: boolean;
};

const AccordionWrapper = styled.div<Props>(
  ({ theme: { colorNew, newTokens }, isContentInside }) => ({
    padding: isContentInside ? rem(16) : 0,
    backgroundColor: isContentInside ? colorNew.gohan : 'transparent',
    width: '100%',
    borderRadius: newTokens.borderRadius.medium,
    height: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  })
);

export default AccordionWrapper;
