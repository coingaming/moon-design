import React, { forwardRef } from 'react';
import { ListboxInputProps } from '@reach/listbox';
import Option from './private/OptionType';
import SingleSelectWithContext from './private/SingleSelectWithContext';
import Container from './styles/Container';
import HintText from './styles/HintText';
import ListboxInputWrapper from './styles/ListboxInputWrapper';
import SelectLabel from './styles/SelectLabel';

export interface SingleSelectProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  variant: 'primary' | 'secondary';
  disabled?: boolean;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
  zIndexOptions?: number;
}

const SingleSelect = forwardRef<
  HTMLSelectElement,
  SingleSelectProps & ListboxInputProps
>(
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
      zIndexOptions,
    },
    ref
  ) => {
    return (
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
          {({ value, isExpanded }) => (
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
              selectedValue={value}
              zIndexOptions={zIndexOptions}
            />
          )}
        </ListboxInputWrapper>
        {hintText && <HintText isError={isError}>{hintText}</HintText>}
      </Container>
    );
  }
) as React.ElementType;

export default SingleSelect;
