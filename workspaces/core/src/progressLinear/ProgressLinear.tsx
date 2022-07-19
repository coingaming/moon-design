import React from 'react';
import classNames from '../private/utils/classnames';

type SizeProps = '6xs' | '5xs' | '4xs' | '3xs' | '2xs';
type ProgressbarProps = {
  value: number;
  text?: JSX.Element;
  backgroundColor?: string;
  height?: number;
  fontSize?: number;
  size?: SizeProps;
};

const getHeight = (size?: SizeProps) => {
  switch(size) {
    case '6xs': 
      return 'h-0.5';
    case '5xs': 
      return 'h-1';
    case '4xs': 
      return 'h-2';
    case '3xs': 
      return 'h-3';
    case '2xs': 
      return 'h-4'
  }
}

const getTextSize = (size?: SizeProps) => {
  switch(size) {
    case '6xs': 
      return 'text-[0.06rem] leading-[0.13rem]'; //fs:1px lh:2px
    case '5xs': 
      return 'text-[0.13rem] leading-[0.3rem]'; //fs:2px lh:4px
    case '4xs': 
      return 'text-[0.4rem] leading-[0.5rem]'; //fs:6px lh:8px
    case '3xs': 
      return 'text-[0.625rem] leading-3'; //fs:10px lh:12px
    case '2xs': 
      return 'text-[0.875rem] leading-4' //fs:14px lh:16px
  }
}
//TODO: ADD SHADOW  to text
const ProgressLinear: React.FC<ProgressbarProps> = ({
  value,
  text,
  backgroundColor,
  height,
  fontSize,
  size = '2xs'
}) => (
  <div className='relative'>
    <div className={classNames(
      'min-w-[100px] bg-goku relative rounded-full',
      backgroundColor && backgroundColor,
      getHeight(size)
    )}>
      <span style={{width: `${value}%`}} className={classNames("block absolute bg-piccolo h-full rounded-full")}/>
    </div>
    {text && (
      <p className={classNames(
        'absolute top-0 translate-x-[-50%] left-1/2 text-bulma tracking-wide font-semibold uppercase whitespace-nowrap rounded-full',
        getTextSize(size)
        )}
      > 
        {text} 
      </p>)
    }
  </div>
);

export default ProgressLinear;
