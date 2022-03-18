import styled from 'styled-components';

interface Props {
  orientation?: 'vertical' | 'horizontal';
}

const Container = styled.div<Props>(
  ({ orientation, theme: { newTokens, colorNew } }) => ({
    display: 'flex',
    width: '100%',
    flexDirection: orientation === 'horizontal' ? 'row' : 'column',
    border: 'none',
    boxShadow: `0 0 0 ${newTokens.border.width.default} ${colorNew.beerus} inset`,
    borderRadius: newTokens.borderRadius.large,
  })
);

export default Container;
