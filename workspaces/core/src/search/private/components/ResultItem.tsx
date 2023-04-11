import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  useContext,
} from 'react';
import mergeClassnames from '../../../mergeClassnames/mergeClassnames';
import {
  OpenContext,
  SelectContext,
} from '../utils/context';

export type ListItemType = 'Link' | 'Action';

const commonClasses = 'moon-search-list-item w-full';

interface ListItemBaseProps {
  closeOnSelect?: boolean;
  showType?: boolean;
  disabled?: boolean;
  keywords?: string[];
  index: number;
};

export type LinkProps = ListItemBaseProps &
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & {
    children?: ReactNode | ((selected: boolean) => ReactNode);
  };

export function Link({
  closeOnSelect = true,
  disabled = false,
  showType = true,
  className,
  children,
  onClick,
  index,
  ...rest
}: LinkProps) {
  const { onChangeOpen } = useContext(OpenContext);
  const { selected } = useContext(SelectContext);

  function renderLinkContent() {
    return (
      <div>
        {typeof children === 'function'
          ? children(selected === index)
          : children}
      </div>
    );
  }

  function clickAndClose(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (rest.href && !disabled) {
      if (onClick) {
        onClick(e);
      }

      if (closeOnSelect) {
        onChangeOpen(false);
      }
    }
  }

  return <a
    data-close-on-select={closeOnSelect}
    aria-disabled={disabled}
    onClick={clickAndClose}
    className={mergeClassnames(commonClasses, className)}
    {...rest}
  >
    {renderLinkContent()}
  </a>
}

export type ButtonProps = ListItemBaseProps &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    children?: ReactNode | ((selected: boolean) => ReactNode);
  };

export function Button({
  closeOnSelect = true,
  showType = true,
  className,
  children,
  onClick,
  index,
  ...rest
}: ButtonProps) {
  const { selected } = useContext(SelectContext);
  const { onChangeOpen } = useContext(OpenContext);

  function clickAndClose(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (onClick) {
      onClick(e);

      if (closeOnSelect) {
        onChangeOpen(false);
      }
    }
  }

  return (
    <button
      {...rest}
      aria-disabled={rest.disabled ?? false}
      data-close-on-select={closeOnSelect}
      onClick={clickAndClose}
      className={mergeClassnames(commonClasses, className)}
    >
      {typeof children === 'function' ? children(selected === index) : children}
    </button>
  );
}

export default function ResultItem(props: ButtonProps & LinkProps) {
  const Wrapper = props.href ? Link : Button;

  return <Wrapper {...props} />;
}
