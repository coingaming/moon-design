import {rem} from '@heathmont/moon-utils';
import styled from 'styled-components';

interface Props {
  dir?: string;
  errorState?: boolean;
  stretch?: boolean;
}

const Container = styled.div<Props>(
  ({ dir, errorState, stretch }) => ({
    display: 'flex',
    flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
    justifyContent: 'center',
    position: 'relative',
    paddingBottom: errorState ? rem(24) : 0,
    width: '100%',
    '& > div': {
      display: 'flex',
      position: 'relative',
      flexGrow: stretch ? 1 : 0,
      justifyContent: stretch ? 'space-between' : 'center',
    }
  })
);

export default Container;
