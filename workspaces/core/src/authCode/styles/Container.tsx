import React from 'react';
import classNames from '../../private/utils/classnames';
import { ContainerProps } from '../private/types/ContainerProps';

const Container: React.FC<ContainerProps> = ({
  dir,
  errorState,
  stretch,
  children,
}) => {
  return (
    <div
      className={classNames(
        'flex',
        dir === 'rtl' ? 'flex-row-reverse	' : 'flex-row',
        'justify-center',
        'relative',
        errorState ? 'pb-6' : 'pb-0',
        'w-full'
      )}
    >
      <div
        className={classNames(
          'flex',
          'relative',
          stretch ? 'flex-grow justify-between' : 'flex-grow-0 justify-center',
          errorState ? 'pb-6' : 'pb-0',
          'w-full'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
