import React from 'react';
import classNames from '../../private/utils/classnames';

const InputWrapper: React.FC = ({ children }) => {
  return (
    <div
      className={classNames(
        'flex',
        'justify-center',
        'items-stretch',
        'w-11.5',
        'h-14',
        'mr-2',
        'last:mr-0'
      )}
    >
      <div className={classNames('disabled:opacity-100')}>
        <input
          className={classNames(
            'disabled:cursor-not-allowed',
            'w-full h-full text-center text-2xl leading-8 text-bulma'
          )}
        >
          {children}
        </input>
      </div>
    </div>
  );
};

export default InputWrapper;
