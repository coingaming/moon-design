import React from 'react';
import classNames from '../../private/utils/classnames';

const ShowPassword: React.FC<{ isRtl?: boolean; onClick: () => void }> = ({
  children,
  isRtl,
  onClick,
}) => (
  <div
    onClick={onClick}
    role="alert"
    className={classNames(
      'text-moon-14 text-bulma absolute top-2/4 mt-[-0.75rem] z-[3] underline cursor-pointer',
      isRtl ? 'left-[0.938rem]' : 'right-[0.938rem]'
    )}
  >
    {children}
  </div>
);

export default ShowPassword;
