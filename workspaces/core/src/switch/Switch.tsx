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
  size = 'md',
}) => {
  const getSizes = () => {
    let classes = '';

    if (!button) {
      switch (size) {
        case Size.XSMALL:
          classes += 'w-[32px] h-[16px] after:w-[12px] after:h-[12px] ';
          classes += isRTL ? 'after:translate-x-3 peer-checked:after:translate-x-0' : 'peer-checked:after:translate-x-3';
          break;
        case Size.SMALL:
          classes += 'w-[44px] h-[24px] after:w-[16px] after:h-[16px] ';
          classes += isRTL ? 'after:translate-x-5 peer-checked:after:translate-x-0' : 'peer-checked:after:translate-x-5';
          break;
        case Size.MEDIUM:
          classes += 'w-[60px] h-[32px] after:w-[24px] after:h-[24px] ';
          classes += isRTL ? 'after:translate-x-7 peer-checked:after:translate-x-0' : 'peer-checked:after:translate-x-7';
          break;
        default:
          classes += 'w-[60px] h-[32px] after:w-[24px] after:h-[24px] ';
          classes += isRTL ? 'after:translate-x-7 peer-checked:after:translate-x-0' : 'peer-checked:after:translate-x-7';
          break;
      }

      classes += ' after:rounded-full ';
    }
    else {
      if (size === Size.LARGE) {
        classes += 'w-[122px] h-[48px] top-[191px] left-[577px] after:w-[57px] after:h-[40px] after:z-0 peer-checked:after:z-0 after:top-1 after:left-1 after:px-2 after:py-1 after:rounded-[8px] rounded-[12px] p-1 gap-1 ';
      }
      else if (size === Size.MEDIUMBUTTONS) {
        classes += 'w-[106px] h-[40px] top-[195px] left-[161px] after:w-[49px] after:h-[32px] after:z-0 peer-checked:after:z-0 after:top-1 after:left-1 after:px-1 after:py-1 after:rounded-[8px] rounded-[12px] p-1 gap-1 ';
      }

      classes += isRTL ? 'after:translate-x-full peer-checked:after:translate-x-0' : 'peer-checked:after:translate-x-full';
    }

    return classes;
  }

  return (
    <>
      <label
        className={classNames(
          'relative flex justify-between items-center group p-2 text-xl',
          disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer peer-checked:cursor-pointer'
        )}
      >
        <input
          type="checkbox"
          className={classNames(
            'absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer peer-checked:cursor-pointer'
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
            `${getSizes()}`,
            theme && 'bg-beerus peer-checked:bg-black after:z-1 peer-checked:cursor-pointer after:cursor-pointer',
            disabled ? 'cursor-not-allowed peer-checked:cursor-not-allowed after:cursor-not-allowed' : 'cursor-pointer peer-checked:cursor-pointer after:cursor-pointer'
          )}
        >
          {button && (
            <div className={classNames(
              "w-full z-1 h-full flex items-center justify-between absolute cursor-pointer p-2",
              disabled ? 'cursor-not-allowed peer-checked:cursor-not-allowed after:cursor-not-allowed' : 'cursor-pointer peer-checked:cursor-pointer after:cursor-pointer'
            )}>
              <p
                className={classNames(
                  'flex items-center w-[31px] h-[24px] p-1 z-1 top-1 left-2 text-[14px] leading-6	',
                  size === Size.LARGE ? 'top-2 left-3' : '',
                  checked === true ? ' text-white ' : ''
                )}
              >{button.offLabel}</p>
              <p
                className={classNames(
                  'flex items-center  w-[31px] h-[24px] p-1 text-[14px] leading-6	',
                  size === Size.LARGE ? 'top-2 left-3' : ''
                )}
              >{button.onLabel}</p>
            </div>
          )}

          {!!theme && (
            <div className={classNames(
              "w-[50%] h-full flex items-center justify-between absolute cursor-pointer",
              disabled ? 'cursor-not-allowed peer-checked:cursor-not-allowed after:cursor-not-allowed' : 'cursor-pointer peer-checked:cursor-pointer after:cursor-pointer'
            )}>
              <span
                className={classNames(
                  'flex items-center z-0 ',
                  size === Size.XSMALL
                    ? 'w-1/2 h-full py-1'
                    : size === Size.SMALL
                    ? 'w-3/4 h-3/4 p-0'
                    : 'w-full h-full p-1',
                  checked === false ? 'invisible' : ''
                )}
              ><IconMoon /></span>
              <span
                className={classNames(
                  'flex items-center',
                  size === Size.XSMALL
                    ? 'w-1/2 h-full py-1'
                    : size === Size.SMALL
                    ? 'w-4/5 h-3/4 pr-2'
                    : 'w-4/5 h-3/4 py-1'
                )}
              ><IconSun /></span>
            </div>
          )}
        </span>
      </label>
    </>
  );
};

export default Switch;
