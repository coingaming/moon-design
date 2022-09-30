import React from 'react';
import { ColorNames } from '@heathmont/moon-themes-tw';
import classNames from '../utils/classnames';

type TDProps = {
  selectable?: boolean;
  isExpanded?: boolean;
  isLastRow?: boolean;
  hasParent?: boolean;
  isSelected?: boolean;
  customBackground?: boolean;
  backgroundColor?: ColorNames;
  fontColor?: ColorNames;
};

const TD: React.FC<TDProps> = ({
  isExpanded,
  isSelected,
  fontColor,
  customBackground,
  backgroundColor,
  isLastRow,
  hasParent,
  selectable,
  children,
}) => {
  return (
    <div
      className={classNames(
        'p-3 pr-1 relative box-border py-4 justify-between items-center w-full text-start ',
        'first:border-l-1 first:border-solid first:border-transparent first:rounded-tl-1 first:rounded-bl-1',
        'last:border-r-1 last:border-solid last:border-transparent last:rounded-tr-1 last:rounded-br-1', //chain::afer:w-0
        `after:content-[""] after:absolute after:w-[1px] after:bg-beerus after:h-3/5 after:bottom-[20%] after:right-0 after:translate-x-[-50%]`
        // isExpanded ? 'first:rounded-bl-0 last:rounded-br-0' : '',
        // isLastRow
        //   ? 'first:rounded-tl-0 first:rounded-bl-0 last:rounded-tl-0 last:rounded-br-0'
        //   : '',
        // isLastRow && hasParent ? 'first:rounded-tl-0 last:rounded-tr-0' : '',
        // isLastRow && !isExpanded ? 'first:rounded-bl-2 last:rounded-br-2' : '',
        // isSelected ? 'text-popo bg-piccolo/10' : fontColor ? 'text-popo' : '',
        // isSelected && !customBackground
        //   ? 'bg-piccolo/10 border-piccolo/10'
        //   : `bg-${backgroundColor} border-${backgroundColor}`,
        // selectable &&
        //   'pl-2 text-bulma border-t-1 border-t-transparent border-b-1 border-b-transparent'
      )}
    >
      {children}
    </div>
  );
};

export default TD;
