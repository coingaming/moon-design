import styled from 'styled-components';

interface Props {
  orientation?: 'vertical' | 'horizontal';
}

const Container = styled.div<Props>(({ theme, orientation }) => ({
  display: 'flex',
  flexDirection: orientation === 'horizontal' ? 'row' : 'column',
}));

export default Container;
