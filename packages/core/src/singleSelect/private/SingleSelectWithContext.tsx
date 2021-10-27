import React from 'react';
import ListboxPopoverWrapper from './styles/ListboxPopoverWrapper';
import Options from './Options';
import SearchWrapper from './styles/SearchWrapper';
import ListboxButtonComponent from './ListboxButtonComponent';
import Option from '../private/OptionType';

interface SingleSelectWithContextProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  isExpanded?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
  inputSize?: 'small' | 'medium';
  search?: JSX.Element;
  topContent?: JSX.Element;
  controlledValue?: string;
  placeholderValue?: JSX.Element;
  error?: boolean;
  label?: JSX.Element | string;
  titleOptions?: JSX.Element | string;
  selectedValue: string | null;
  zIndexOptions?: number;
}

const SingleSelectWithContext: React.FC<SingleSelectWithContextProps> = ({
  isExpanded,
  options,
  disabled,
  inputSize,
  search,
  controlledValue,
  placeholderValue,
  error,
  variant,
  label,
  topContent,
  titleOptions,
  selectedValue,
  zIndexOptions,
}) => (
  <>
    <ListboxButtonComponent
      disabled={disabled}
      isExpanded={isExpanded}
      inputSize={inputSize}
      controlledValue={controlledValue}
      error={error}
      variant={variant}
      selectLabel={label}
    />
    <ListboxPopoverWrapper zIndexOptions={zIndexOptions}>
      {search && <SearchWrapper>{search}</SearchWrapper>}
      {topContent && topContent}
      {titleOptions && titleOptions}
      <Options
        options={options}
        placeholderValue={placeholderValue}
        selectedValue={selectedValue}
      />
    </ListboxPopoverWrapper>
  </>
);

export default SingleSelectWithContext;
