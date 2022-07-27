import React from 'react';
import classNames from '../../private/utils/classnames';
import { PropType } from '../private/types/MessageWrapperProps';

const MessageWrapper: React.FC<PropType> = ({ textAlign, children }) => {
  return (
    <div
      className={classNames(
        'flex',
        'items-center',
        textAlign === 'center'
          ? 'justify-center left-1/2 transform translate-x-2/4	 translate-y-full'
          : textAlign === 'right'
          ? 'justify-end right-0 transform translate-x-0	 translate-y-full'
          : 'justify-start left-0 transform translate-x-0	 translate-y-full',
        'absolute',
        'p-1.25',
        'bottom-0'
      )}
    >
      {children}
    </div>
  );
};

export default MessageWrapper;
