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
    position: 'relative',
    paddingBottom: errorState ? rem(24) : 0,
    width: '100%',
    justifyContent: stretch ? 'space-between' : 'center',
    '& > div': {
      display: 'flex',
      position: 'relative',
      '& > div': {
        flexGrow: stretch ? 1 : 0
      }
    }
  })
);

export default Container;
