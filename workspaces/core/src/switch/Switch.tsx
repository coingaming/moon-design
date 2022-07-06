import React from 'react';
import classNames from '../private/utils/classnames';
import IconMoon from './private/iconMoon';
import IconSun from './private/iconSun';
import SwitchProps, { Size } from './private/switchProps';

const Switch: React.FC<SwitchProps> = ({
  disabled,
  button,
  checked,
  onChange,
  isRTL,
  theme,
  size,
}) => {
  return (
    <>
      <label
        className={classNames(
          'relative flex justify-between items-center group p-2 text-xl ',
          disabled && 'opacity-30 cursor-not-allowed ',
          disabled && isRTL && 'opacity-90 cursor-not-allowed '
        )}
      >
        <input
          type="checkbox"
          className={classNames('absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md')}
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
            !button && size === Size.XSMALL
              ? 'w-[32px] h-[16px] after:w-[12px] after:h-[12px] peer-checked:after:translate-x-3 '
              : size === Size.SMALL
              ? 'w-[44px] h-[24px] after:w-[16px] after:h-[16px] peer-checked:after:translate-x-5  '
              : 'w-[60px] h-[32px] after:w-[24px] after:h-[24px] peer-checked:after:translate-x-7  ',
            'flex items-center flex-shrink-0 p-1 rounded-full duration-300 ease-in-out bg-beerus peer-checked:bg-piccolo after:bg-white after:rounded-full after:shadow-md after:duration-300 ',
            isRTL && 'bg-piccolo peer-checked:bg-beerus',
            button && size === Size.LARGE
              ? 'w-[122px] h-[48px] after:hidden rounded-[12px] top-[36px] left-[577px] p-2 gap-2'
              : size === Size.MEDIUMBUTTONS
              ? 'w-[106px] h-[44px] after:hidden rounded-[12px] top-[40px] left-[161px] p-2 gap-2'
              : '',

            theme && 'bg-beerus peer-checked:bg-black after:z-1'
          )}
        >
          {button && (
            <div className=" w-full h-full flex items-center p-1 justify-between">
              <p
                className={classNames(
                  'text-[16px] flex items-center justify-center w-1/2 text-center pr-3',
                  checked === false ? 'bg-white rounded-[12px] p-1' : '',
                  checked === true ? ' text-white ' : ''
                )}
              >
                {button.offLabel}
              </p>
              <p
                className={classNames(
                  'text-[16px] flex items-center justify-center w-1/2 text-center',
                  checked === true ? 'bg-white p-1 rounded-[12px]' : ''
                )}
              >
                {button.onLabel}
              </p>
            </div>
          )}

          {!!theme && (
            <div className=" w-[50%] h-full flex items-center justify-between absolute ">
              <span
                className={classNames(
                  'flex items-center z-0 ',
                  size === Size.XSMALL
                    ? 'w-1/2 h-full'
                    : size === Size.SMALL
                    ? 'w-4/5 h-3/4 p-0'
                    : 'w-full h-full p-1'
                )}
              >
                <IconMoon />
              </span>
              <span
                className={classNames(
                  'flex items-center ',
                  size === Size.XSMALL
                    ? 'w-1/2 h-full p-0'
                    : size === Size.SMALL
                    ? 'w-4/5 h-3/4 pr-2'
                    : 'w-4/5 h-3/4 py-1'
                )}
              >
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
