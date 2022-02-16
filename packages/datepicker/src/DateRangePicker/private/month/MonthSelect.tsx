import React from 'react';
import useClickOutside from '../../../hooks/useClickOutside';
import { getMonths } from '../../../private/helper/getMonths';
import Container from './styles/Container';
import LabelContainer from './styles/LabelContainer';
import SelectorContainer from './styles/SelectorContainer';

type MonthSelectProps = {
  monthLabel: string;
  setMonth: (month?: number) => void;
  isSecond?: boolean;
};

const MonthSelect: React.FC<MonthSelectProps> = ({
  monthLabel,
  setMonth,
  isSecond,
}) => {
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
      {monthLabel}
      {isOpen && (
        <SelectorContainer>
          {months.map((m, i) => (
            <LabelContainer
              key={`${m}${i}`}
              onClick={() => setMonth(isSecond ? i - 1 : i)}
            >
              {m}
            </LabelContainer>
          ))}
        </SelectorContainer>
      )}
    </Container>
  );
};

export default MonthSelect;
