import styled from 'styled-components';

const InnerCircle = styled.span({
  width: '100%',
  height: '50%',
  position: 'absolute',
  marginTop: '50%',
  background:
    'linear-gradient(90deg, rgba(220, 220, 220, 0), rgba(150, 150, 150, 1))',
  '&::before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    marginTop: '-50%',
    background:
      'linear-gradient(90deg, rgba(50, 50, 50, 1), rgba(160, 160, 160, 1))',
  },
  '&::after': {
    content: '""',
    width: '80%',
    height: '160%',
    position: 'absolute',
    marginTop: '-40%',
    marginInlineStart: '10%',
    background: 'white',
    borderRadius: '50%',
  },
});

export default InnerCircle;
