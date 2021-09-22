import React from 'react';
import ListboxPopoverWrapper from './styles/ListboxPopoverWrapper';
import Options from './Options';
import SearchWrapper from './styles/SearchWrapper';
import ListboxButtonComponent from './ListboxButtonComponent';
import Option from '../private/OptionType';

interface SingleSelectWithContextProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  disabled?: boolean;
  isExpanded?: boolean;
  onChange?: any;
  inputSize?: 'small' | 'medium';
  search?: JSX.Element;
  controlledValue?: string;
}

const SingleSelectWithContext: React.FC<SingleSelectWithContextProps> = ({
  isExpanded,
  options,
  disabled,
  inputSize,
  search,
  controlledValue,
}) => (
  <>
    <ListboxButtonComponent
      disabled={disabled}
      isExpanded={isExpanded}
      inputSize={inputSize}
      controlledValue={controlledValue}
    />
    <ListboxPopoverWrapper>
      {search && <SearchWrapper>search</SearchWrapper>}
      <Options options={options} />
    </ListboxPopoverWrapper>
  </>
);

export default SingleSelectWithContext;
