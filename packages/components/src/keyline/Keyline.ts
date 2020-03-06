import styled from 'styled-components';

/**
 * `<any>` justification: https://coingaming.atlassian.net/browse/SPO-4963.
 */
const Keyline = styled.hr<any>(({ theme: { borderWidth, color } }) => ({
  display: 'block',
  borderWidth: `${borderWidth}px 0 0 0`,
  borderColor: color.beerus[100],
  borderStyle: 'solid',
}));

export default Keyline;
