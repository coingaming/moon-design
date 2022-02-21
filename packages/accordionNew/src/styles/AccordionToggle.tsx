import styled from 'styled-components';

type Props = {
  disabled?: boolean;
};

const AccordionToggle = styled.button<Props>(
  ({ theme: { colorNew, newTokens }, disabled }) => ({
    verticalAlign: 'middle',
    fontSize: newTokens.space.twoxsmall,
    lineHeight: 0,
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: colorNew.trunks,
    borderColor: 'transparent',
    backgroundColor: colorNew.gohan,
  })
);

export default AccordionToggle;
