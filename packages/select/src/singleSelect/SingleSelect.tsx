import React, { forwardRef } from 'react';
import ListboxInputWrapper from './styles/ListboxInputWrapper';
import Container from '../private/styles/Container';
import SelectLabel from './styles/SelectLabel';
import HintText from './styles/HintText';
import SingleSelectWithContext from './private/SingleSelectWithContext';
import Option from './private/OptionType';

export interface SingleSelectProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  variant: 'primary' | 'secondary';
  disabled?: boolean;
  defaultValue?: string;
  onChange?: any;
  inputSize?: 'small' | 'medium';
  search?: JSX.Element;
  topContent?: JSX.Element;
  controlledValue?: string;
  placeholderValue?: JSX.Element;
  label?: JSX.Element | string;
  labelId?: string;
  hintText?: JSX.Element | string;
  isError?: boolean;
  titleOptions?: JSX.Element | string;
}

const SingleSelect = forwardRef<HTMLSelectElement, SingleSelectProps>(
  (
    {
      options,
      variant,
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
      topContent,
      titleOptions,
    },
    ref
  ) => (
    <Container>
      {label && variant === 'primary' && (
        <SelectLabel id={labelId}>{label}</SelectLabel>
      )}
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
            topContent={topContent}
            controlledValue={controlledValue}
            placeholderValue={placeholderValue}
            error={isError}
            variant={variant}
            label={label}
            titleOptions={titleOptions}
          />
        )}
      </ListboxInputWrapper>
      {hintText && <HintText isError={isError}>{hintText}</HintText>}
    </Container>
  )
);

export default SingleSelect;
