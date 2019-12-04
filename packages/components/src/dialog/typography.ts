import styled from 'styled-components';
import { rem } from 'polished';

/**
 * Dialog Typography
 *
 * `<any>` justification: https://coingaming.atlassian.net/browse/SPO-4963.
 */

export const DialogHeading = styled.h1<any>(
  ({ theme: { color, fontWeight } }) => ({
    fontWeight: fontWeight.normal,
    fontSize: rem(24),
    lineHeight: 1.25,
    color: color.bulma[100],
  })
);

export const DialogText = styled.p<any>(({ theme: { color } }) => ({
  fontSize: rem(16),
  lineHeight: 1.5,
  color: color.trunks[100],
}));
