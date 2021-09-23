import React, { forwardRef } from 'react';
import ListboxInputWrapper from './styles/ListboxInputWrapper';
import Container from './styles/Container';
import SelectLabel from './styles/SelectLabel';
import HintText from './styles/HintText';
import SingleSelectWithContext from './private/SingleSelectWithContext';
import Option from './private/OptionType';

export interface SingleSelectProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  disabled?: boolean;
  defaultValue?: string;
  onChange?: any;
  inputSize?: 'small' | 'medium';
  search?: JSX.Element;
  controlledValue?: string;
  placeholderValue?: JSX.Element;
  label?: JSX.Element | string;
  labelId?: string;
  hintText?: JSX.Element | string;
  isError?: boolean;
}

const SingleSelect = forwardRef<HTMLSelectElement, SingleSelectProps>(
  (
    {
      options,
      disabled,
      defaultValue,
      onChange,
      inputSize,
      search,
      controlledValue,
      placeholderValue,
      label,
      labelId,
      hintText,
      isError,
    },
    ref
  ) => (
    <Container>
      {label && <SelectLabel id={labelId}>{label}</SelectLabel>}
      <ListboxInputWrapper
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={onChange}
        ref={ref}
        inputsize={inputSize}
        aria-labelledby={labelId}
        error={isError ? 'true' : undefined}
      >
        {({ isExpanded }) => (
          <SingleSelectWithContext
            isExpanded={isExpanded}
            options={options}
            disabled={disabled}
            inputSize={inputSize}
            search={search}
            controlledValue={controlledValue}
            placeholderValue={placeholderValue}
            error={isError}
          />
        )}
      </ListboxInputWrapper>
      {hintText && <HintText isError={isError}>{hintText}</HintText>}
    </Container>
  )
);

export default SingleSelect;
