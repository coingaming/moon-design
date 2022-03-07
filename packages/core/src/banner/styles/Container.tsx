import styled from 'styled-components';

type Props = {
  hasButtons?: boolean;
  isMobile?: boolean;
};

const Container = styled.div<Props>(({ hasButtons, isMobile }) => [
  {
    width: '100%',
    display: hasButtons && !isMobile ? 'flex' : 'block',
  },
  hasButtons &&
    !isMobile && {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
]);

export default Container;
