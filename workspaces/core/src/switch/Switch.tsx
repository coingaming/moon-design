import React from 'react';
import { OtherSun, OtherMoon } from '@heathmont/moon-icons-tw';
import classNames from '../private/utils/classnames';
import getSizeClasses from './private/getSizeClasses';
import SwitchProps from './private/switchProps';

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
          'relative flex justify-between items-center group p-2 text-xl',
          disabled
            ? 'opacity-30 cursor-not-allowed'
            : 'cursor-pointer peer-checked:cursor-pointer'
        )}
      >
        <input
          type="checkbox"
          className={classNames(
            'absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md',
            disabled
              ? 'cursor-not-allowed'
              : 'cursor-pointer peer-checked:cursor-pointer'
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
            'flex items-center flex-shrink-0 p-1 rounded-full duration-300 ease-in-out bg-beerus peer-checked:bg-piccolo after:bg-white after:shadow-md after:duration-300',
            `${getSizeClasses({ button: !!button, size, isRTL })}`,
            theme &&
              'bg-beerus peer-checked:bg-black after:z-1 peer-checked:cursor-pointer after:cursor-pointer',
            disabled
              ? 'cursor-not-allowed peer-checked:cursor-not-allowed after:cursor-not-allowed'
              : 'cursor-pointer peer-checked:cursor-pointer after:cursor-pointer'
          )}
        >
          {!!button && (
            <div
              className={classNames(
                'w-full z-1 h-full flex items-center justify-between absolute cursor-pointer p-2',
                disabled
                  ? 'cursor-not-allowed peer-checked:cursor-not-allowed after:cursor-not-allowed'
                  : 'cursor-pointer peer-checked:cursor-pointer after:cursor-pointer'
              )}
            >
              <p
                className={classNames(
                  'flex items-center w-[31px] h-[24px] p-1 z-1 top-1 left-2 text-[14px] leading-6	',
                  size === 'lg' ? 'top-2 left-3' : '',
                  checked === true ? ' text-white ' : ''
                )}
              >
                {button.offLabel}
              </p>
              <p
                className={classNames(
                  'flex items-center  w-[31px] h-[24px] p-1 text-[14px] leading-6	',
                  size === 'lg' ? 'top-2 left-3' : ''
                )}
              >
                {button.onLabel}
              </p>
            </div>
          )}

          {!!theme && (
            <div
              className={classNames(
                'w-[50%] h-full flex items-center justify-between absolute cursor-pointer',
                disabled
                  ? 'cursor-not-allowed peer-checked:cursor-not-allowed after:cursor-not-allowed'
                  : 'cursor-pointer peer-checked:cursor-pointer after:cursor-pointer'
              )}
            >
              <span
                className={classNames(
                  'flex items-center z-0 ',
                  size === '2xs'
                    ? 'w-1/2 h-full py-1'
                    : size === 'xs'
                    ? 'w-3/4 h-3/4 p-0'
                    : 'w-full h-full p-1',
                  checked === false ? 'invisible' : ''
                )}
              >
                <OtherMoon />
              </span>
              <span
                className={classNames(
                  'flex items-center',
                  size === '2xs'
                    ? 'w-1/2 h-full py-1'
                    : size === 'xs'
                    ? 'w-4/5 h-3/4 pr-2'
                    : 'w-4/5 h-3/4 py-1'
                )}
              >
                <OtherSun />
              </span>
            </div>
          )}
        </span>
      </label>
    </>
  );
};

export default Switch;
