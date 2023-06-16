import React, { forwardRef } from 'react';
import { useFormItemContext } from '../form/Form';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  disabled?: boolean;
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, error: textareaError, ...rest }, ref) => {
    const { disabled: formItemDisabled, error: formItemError } =
      useFormItemContext('Textarea');
    const error = textareaError || formItemError;
    return (
      <textarea
        ref={ref}
        disabled={disabled || formItemDisabled}
        className={mergeClassnames(
          'block appearance-none resize-none w-full p-4 text-moon-16 text-bulma bg-gohan rounded-moon-s-sm placeholder:text-trunks',
          'transition-shadow shadow-textarea hover:shadow-textarea-hov',
          'focus:shadow-textarea-focus focus:outline-none',
          error &&
            'shadow-textarea-err hover:shadow-textarea-err focus:shadow-textarea-err',
          disabled && 'opacity-30 cursor-not-allowed',
          className
        )}
        {...rest}
      />
    );
  }
);

export default Textarea;
