import styled from "styled-components";

const ButtonLabels = styled.span({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'relative',
  zIndex: 9,
  '& > p': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    textAlign: 'center'
  }
});

export default ButtonLabels;
