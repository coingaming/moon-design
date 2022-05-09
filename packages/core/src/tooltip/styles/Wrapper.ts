import styled from "styled-components";

const Wrapper = styled.div({
  position: 'relative',
  cursor: 'pointer',
  '& > div:nth-child(2)': {
    display: 'none'
  },
  '&:hover': {
    '& > div:nth-child(2)': {
      display: 'flex'
    },
  }
});

export default Wrapper;
