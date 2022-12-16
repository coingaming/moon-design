import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import stateReducer from '../private/utils/stateReducer';
import mergeClassnames from '../utils/mergeClassnames';

type RadioGroupState = {
  selected?: boolean;
  registerChild?: (child: string) => () => void;
};

const RadioGroupContext = createContext<RadioGroupState>({});
RadioGroupContext.displayName = 'RadioGroupContext';

const useRadioGroupContext = (component: string) => {
  const context = useContext(RadioGroupContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <RadioGroup /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useRadioGroupContext);
    throw err;
  }
  return context;
};

type Props = {
  className?: string;
  defaultValue?: string;
  children?: React.ReactNode;
  isSelected?: boolean;
};

const RadioGroupRoot: React.FC<Props> = ({
  children,
  className,
  defaultValue,
  isSelected,
  ...rest
}) => {
  const states = {
    selected: isSelected,
  };
  const [state, dispatch] = useReducer(stateReducer, {
    childrens: [],
  });
  const registerChild = useCallback((child: string) => {
    dispatch && dispatch({ type: 'RegisterChild', children: child });
    return () =>
      dispatch && dispatch({ type: 'UnregisterChild', children: child });
  }, []);
  return (
    <RadioGroupContext.Provider value={{ ...states, ...state, registerChild }}>
      <RadixRadioGroup.Root
        defaultValue={defaultValue}
        className={className}
        {...rest}
      >
        {children}
      </RadixRadioGroup.Root>
    </RadioGroupContext.Provider>
  );
};

type ItemProps = {
  className?: string;
  value: string;
  children?: React.ReactNode;
};

const Item: React.FC<ItemProps> = ({ className, value, children }) => (
  <RadixRadioGroup.Item
    value={value}
    className={mergeClassnames(
      'flex gap-2 items-center justify-center',
      className
    )}
  >
    {children}
  </RadixRadioGroup.Item>
);

type IndicatorProps = {
  isSelected?: boolean;
  color?: string;
  className?: string;
};

const Indicator: React.FC<IndicatorProps> = ({
  isSelected,
  color = 'border-piccolo',
  className,
}) => {
  const { selected = isSelected, registerChild } = useRadioGroupContext(
    'RadioGroup.Indicator'
  );
  useEffect(() => {
    registerChild && registerChild('Indicator');
  }, []);
  console.log({ isSelected });
  return (
    <span className="flex h-6 w-6 items-center justify-center">
      <span
        className={mergeClassnames(
          'flex h-4 w-4 items-center justify-center border border-trunks rounded-full transition-colors',
          className,
          selected && color
        )}
      >
        <span
          className={mergeClassnames(
            'h-2 w-2 rounded-full border-4 scale-0 transition-transform',
            color,
            selected && 'scale-100'
          )}
        ></span>
      </span>
    </span>
  );
};

type LabelProps = {
  className?: string;
  children?: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ className, children }) => (
  <span className={mergeClassnames('text-bulma text-moon-14', className)}>
    {children}
  </span>
);

const RadioGroup = Object.assign(RadioGroupRoot, {
  Item,
  Indicator,
  Label,
});

export default RadioGroup;
