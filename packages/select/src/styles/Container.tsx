import styled from 'styled-components';

interface Props {
  orientation?: 'vertical' | 'horizontal';
}

const Container = styled.div<Props>(({ orientation }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: orientation === 'horizontal' ? 'row' : 'column',
}));

export default Container;
