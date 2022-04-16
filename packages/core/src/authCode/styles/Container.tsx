import {rem} from '@heathmont/moon-utils';
import styled from 'styled-components';

interface Props {
  dir?: string;
  errorState?: boolean;
}

const Container = styled.div<Props>(
  ({ dir, errorState }) => ({
    display: 'flex',
    flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
    position: 'relative',
    paddingBottom: errorState ? rem(24) : 0
  })
);

export default Container;
