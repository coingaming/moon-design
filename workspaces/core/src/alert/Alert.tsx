import React, { useEffect } from 'react';
import IconButton from '../iconButton/IconButton';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsClose from '../private/icons/ControlsClose';
import useRegisterChild from '../private/utils/useRegisterChild';
import AlertContext from './private/utils/AlertContext';
import useAlertContext from './private/utils/useTooltipContext';
import type CloseProps from './private/types/CloseProps';
import type Props from './private/types/Props';
import type TextProps from './private/types/TextProps';

const AlertRoot: React.FC<Props> = ({ className, children }) => {
  const states = {
    withClose: false,
  };
  const { state, registerChild } = useRegisterChild();
  const isClose = state.childrens?.find((name) => name === 'Close');
  return (
    <AlertContext.Provider value={{ ...states, ...state, registerChild }}>
      <div
        role="alert"
        className={mergeClassnames(
          'relative flex flex-col w-full gap-x-3 gap-y-1 p-4 rounded-moon-s-sm bg-gohan',
          'text-moon-14 text-bulma',
          isClose && 'ltr:pr-[52px] rtl:pl-[52px]',
          className
        )}
      >
        {children}
      </div>
    </AlertContext.Provider>
  );
};

const Title: React.FC<TextProps> = ({ className, children }) => (
  <h6 className={mergeClassnames('flex gap-3 font-medium', className)}>
    {children}
  </h6>
);

const Message: React.FC<TextProps> = ({ className, children }) => (
  <p className={mergeClassnames('flex gap-3', className)}>{children}</p>
);

const Close: React.FC<CloseProps> = ({
  className,
  ariaLabel = 'close',
  onClick,
}) => {
  const { registerChild } = useAlertContext('Alert.Close');
  useEffect(() => {
    registerChild && registerChild('Close');
  }, []);
  return (
    <IconButton
      size="xs"
      variant="ghost"
      aria-label={ariaLabel}
      className={mergeClassnames(
        'absolute ltr:right-4 rtl:left-4 top:4 text-moon-16 text-bulma',
        className
      )}
      onClick={onClick}
      icon={<ControlsClose role="presentation" />}
    />
  );
};

const Alert = Object.assign(AlertRoot, { Title, Message, Close });

export default Alert;
