import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const ShowPassword = styled.div<{ isRtl?: boolean }>(
  ({ theme: { colorNew }, isRtl }) => ({
    fontSize: rem(14),
    lineHeight: rem(24),
    color: colorNew.bulma,
    position: 'absolute',
    top: '50%',
    marginTop: rem(-12),
    ...(isRtl ? { left: rem(15) } : { right: rem(15) }),
    zIndex: 3,
    textDecoration: 'underline',
    cursor: 'pointer',
  })
);

export default ShowPassword;
