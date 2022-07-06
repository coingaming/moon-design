import React from 'react';
import classNames from '../private/utils/classnames';
import IconMoon from './private/iconMoon';
import IconSun from './private/iconSun';
import SwitchProps from './private/switchProps';

const Switch: React.FC<SwitchProps> = ({
  disabled,
  button,
  checked,
  onChange,
  isRTL,
  onLabel, 
  offLabel,
  theme
}) => {

  return (
    <>
      <label
        className={classNames(
          'relative flex justify-between items-center group p-2 text-xl',
          disabled && 'opacity-30 cursor-not-allowed ',
          disabled && isRTL && 'opacity-90 cursor-not-allowed '
        )}
      >
        <input
          type="checkbox"
          className={classNames(
            'absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md'
          )}
          checked={checked}
          onClick={(e) => {
            if (disabled) {
              e.preventDefault();
              e.stopPropagation();
              return;
            }
          }}
          onChange={(e) => onChange((e.target as HTMLInputElement).checked)}
        />
        <span
          className={classNames(
            !button &&
              'w-16 h-10 flex items-center flex-shrink-0  p-1 rounded-full duration-300 ease-in-out after:w-8 after:h-8 bg-gray-300 peer-checked:bg-blue-800 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6',
            isRTL && 'bg-blue-800 peer-checked:bg-gray-300',
            button &&
              'rounded-[10px] w-[130px] bg-gray-300 peer-checked:bg-blue-800',
            theme && 'bg-gray-300 peer-checked:bg-black after:z-1'
          )}
        >
          {!!button && (
            <div className=" w-full h-full flex items-center p-1 justify-between">
              <p
                className={classNames(
                  'text-[16px] flex items-center justify-center w-1/2 text-center pr-3',
                  checked === false ? 'bg-white rounded-[10px] p-1' : '',
                  checked === true ? ' text-white ' : ''
                )}
              >
                {offLabel}
              </p>
              <p
                className={classNames(
                  'text-[16px] flex items-center justify-center w-1/2 text-center',
                  checked === true
                    ? 'bg-white  p-1 rounded-[10px]'
                    : ''
                )}
              >
                {onLabel}
              </p>
            </div>
          )}

          {!!theme && (
            <div className=" w-[50%] h-full flex items-center justify-between absolute p-1 ">
              <span className="flex items-center z-0">
                <IconMoon />
              </span>
              <span className="flex p-2 items-center">
                <IconSun />
              </span>
            </div>
          )}
        </span>
      </label>
    </>
  );
};

export default Switch;
