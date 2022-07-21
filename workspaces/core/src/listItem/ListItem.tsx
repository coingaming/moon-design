import React from 'react';
import classNames from '../private/utils/classnames';

export type ListItemProps = {
  className?: string;
  elementLeft?: React.ReactElement;
  elementRight?: React.ReactElement;
  isMeta?: boolean;
  subtext?: React.ReactElement;
  size?: 'medium' | 'large';
  children?: React.ReactNode;
};

const ListItem: React.FC<ListItemProps> = ({
  children,
  elementLeft,
  elementRight,
  isMeta,
  subtext,
  size = 'medium' as const,
  className
}) => (
  <div
    className={classNames(
      'grid w-full justify-between items-center rounded-moon-s-sm text-bulma',
      size === 'medium' ? 'text-moon-14 p-2' : 'text-moon-16 p-3',
      className && className,
      elementLeft && elementRight ? 'grid-cols-[max-content_1fr_max-content]' : 'grid-cols-[1fr_max-content]',
      elementLeft && !elementRight && !subtext && 'grid-cols-[max-content_1fr]'
    )}
  >
    {elementLeft && <span id='icon' className='flex items-center row-span-2 me-2'>{elementLeft}</span>}
    <div id='main' className={classNames(!elementLeft && !elementRight && 'col-span-2')}>{children}</div>
    {elementRight &&
      (isMeta ? (
        <span id='meta' className={classNames('text-trunks text-moon-12 ms-2 self-center')} >{elementRight}</span>
      ) : (
        <span id='meta' className='ms-2 flex items-center row-span-2'>{elementRight}</span>
      ))}
    {subtext && (
      <div id='description' className={classNames('text-moon-12 text-trunks flex flex-1 min-w-0', isMeta && 'col-span-2')}>
        <div className='whitespace-nowrap overflow-hidden text-ellipsis'>{subtext}</div>
      </div>
    )}
  </div>
);

export default ListItem;
