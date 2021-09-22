import React, { forwardRef } from 'react';

import ListboxInputWrapper from './styles/ListboxInputWrapper';
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
    },
    ref
  ) => (
    <ListboxInputWrapper
      disabled={disabled}
      defaultValue={defaultValue}
      onChange={onChange}
      ref={ref}
      inputSize={inputSize}
    >
      {({ isExpanded }) => (
        <SingleSelectWithContext
          isExpanded={isExpanded}
          options={options}
          disabled={disabled}
          inputSize={inputSize}
          search={search}
          controlledValue={controlledValue}
        />
      )}
    </ListboxInputWrapper>
  )
);

export default SingleSelect;
