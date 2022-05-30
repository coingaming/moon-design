import rem from 'polished/lib/helpers/rem';
import styled from 'styled-components';

type RangeItemProps = {
  isSelected?: boolean;
};

const RangeItem = styled.li<RangeItemProps>(
  ({
    theme: {
      hover,
      newTokens: { borderRadius },
      colorNew,
    },
    isSelected,
  }) => ({
    position: 'relative',
    listStyle: 'none',
    padding: `${rem(8)} ${rem(12)}`,
    marginBottom: rem(4),
    boxSizing: 'border-box',
    cursor: 'pointer',
    fontSize: rem(14),
    lineHeight: rem(24),
    color: isSelected ? colorNew.piccolo : colorNew.bulma,
    background: isSelected && hover.secondary,
    borderRadius: borderRadius.surface.small,
    '&:hover': {
      color: colorNew.piccolo,
      backgroundColor: hover.secondary,
    },
  })
);

export default RangeItem;
