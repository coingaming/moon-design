import React from 'react';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import useClickOutside from '../../../hooks/useClickOutside';
import { getMonths } from '../../../private/helper/getMonths';
import Container from './styles/Container';
import LabelContainer from './styles/LabelContainer';
import SelectorContainer from './styles/SelectorContainer';

type MonthSelectProps = {
  monthLabel: string;
  setMonth: (month?: number) => void;
};

const DownArrow = styled(ControlsChevronDownSmall as any)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.colorNew.bulma,
  fontSize: rem(24),
}));

const MonthSelect: React.FC<MonthSelectProps> = ({ monthLabel, setMonth }) => {
  const [isOpen, setOpen] = React.useState(false);
  const months = getMonths();
  const [ref, hasClickedOutside] = useClickOutside();

  React.useEffect(() => {
    if (hasClickedOutside) {
      setOpen(false);
    }
  });

  return (
    <Container
      onClick={() => setOpen(!isOpen)}
      ref={ref}
      test-id="month-select"
    >
      {monthLabel} <DownArrow />
      {isOpen && (
        <SelectorContainer>
          {months.map((m, i) => (
            <LabelContainer key={`${m}${i}`} onClick={() => setMonth(i)}>
              {m}
            </LabelContainer>
          ))}
        </SelectorContainer>
      )}
    </Container>
  );
};

export default MonthSelect;
