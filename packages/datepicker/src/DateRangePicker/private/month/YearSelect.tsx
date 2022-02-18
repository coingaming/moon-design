import React from 'react';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import useClickOutside from '../../../hooks/useClickOutside';
import { getYears } from '../../../private/helper/getYears';
import Container from './styles/Container';
import LabelContainer from './styles/LabelContainer';
import SelectorContainer from './styles/SelectorContainer';

const MIN_YEAR: number = 1900;
const MAX_YEAR: number = 2150;

type YearSelectProps = {
  year: string;
  setYear: (year: number) => void;
  yearsRange?: {
    min?: number;
    max?: number;
  };
  isRtl?: boolean;
};

const DownArrow = styled(ControlsChevronDownSmall as any)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.colorNew.bulma,
  fontSize: rem(24),
}));

const YearSelect: React.FC<YearSelectProps> = ({
  year,
  setYear,
  yearsRange,
  isRtl,
}) => {
  const [isOpen, setOpen] = React.useState(false);
  const years = getYears({
    min: yearsRange?.min || MIN_YEAR,
    max: yearsRange?.max || MAX_YEAR,
  });
  const [ref, hasClickedOutside] = useClickOutside();

  React.useEffect(() => {
    if (hasClickedOutside) {
      setOpen(false);
    }
  });
  return (
    <Container onClick={() => setOpen(!isOpen)} ref={ref} test-id="year-select">
      {year} <DownArrow />
      {isOpen && (
        <SelectorContainer isRtl={isRtl}>
          {years.map((y: number, i: number) => (
            <LabelContainer key={`${y}${i}`} onClick={() => setYear(y)}>
              {y}
            </LabelContainer>
          ))}
        </SelectorContainer>
      )}
    </Container>
  );
};

export default YearSelect;
