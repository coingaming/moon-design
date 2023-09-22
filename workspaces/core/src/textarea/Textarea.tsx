import React, { forwardRef } from 'react';
import type TextareaProps from './private/types/TextareaProps';
import useFormItemContext from '../form/private/utils/useFormItemContext';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error: textareaError, ...rest }, ref) => {
    const { disabled: formItemDisabled, error: formItemError } =
      useFormItemContext('Textarea');
    const error = textareaError || formItemError;
    const ariaLabelValue = rest.placeholder
      ? undefined
      : rest['aria-label']
      ? rest['aria-label']
      : rest.name
      ? rest.name
      : 'Textarea';
    return (
      <textarea
        ref={ref}
        disabled={rest.disabled || formItemDisabled}
        className={mergeClassnames(
          'block appearance-none resize-none w-full p-4 text-moon-16 text-bulma bg-goku',
          'rounded-moon-s-sm placeholder:text-trunks transition-shadow shadow-textarea',
          'hover:shadow-textarea-hov focus:shadow-textarea-focus focus:outline-none',
          error &&
            'shadow-textarea-err hover:shadow-textarea-err focus:shadow-textarea-err',
          rest.disabled && 'opacity-60 cursor-not-allowed',
          className
        )}
        aria-label={ariaLabelValue}
        {...rest}
      />
    );
  }
);

export default Textarea;
