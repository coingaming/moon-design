import React from 'react';
import mergeClassnames from '../utils/mergeClassnames';

type Props = {
  className?: string;
  disabled?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<Props> = ({ className, disabled, ...rest }) => (
  <textarea
    disabled={disabled}
    className={mergeClassnames(
      'appearance-none resize-none w-full p-4 text-moon-16 text-bulma bg-gohan rounded-moon-s-sm',
      'placeholder:text-trunks outline outline-1 outline-offset-[-1px] outline-beerus',
      'transition-all focus:outline-2 focus:outline-offset-[-2px] focus:outline-piccolo',
      'hover:outline-1 hover:outline-offset-[-1px] hover:outline-bulma/[0.12]',
      disabled && 'opacity-30 cursor-not-allowed',
      className
    )}
    {...rest}
  />
);

export default Textarea;
