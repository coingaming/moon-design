import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  Fragment,
  ReactNode,
  useContext,
} from "react";
import { RenderLink } from "../types";
import { OpenContext, RenderLinkContext, SelectContext } from "../utils/context";
import mergeClassnames from '../../../mergeClassnames/mergeClassnames';

export type ListItemType = "Link" | "Action";

const commonClasses = "moon-search-list-item w-full";

interface ListItemBaseProps {
  closeOnSelect?: boolean;
  showType?: boolean;
  disabled?: boolean;
  keywords?: string[];
  index: number;
}

export interface LinkProps
  extends ListItemBaseProps,
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  renderLink?: RenderLink;
  children?: ReactNode | ((selected: boolean) => ReactNode)
}

export function Link({
  renderLink: localRenderLink,
  closeOnSelect = true,
  disabled = false,
  showType = true,
  className,
  children,
  onClick,
  index,
  ...rest
}: LinkProps) {
  const { renderLink: globalRenderLink } = useContext(RenderLinkContext);
  const { onChangeOpen } = useContext(OpenContext);
  const { selected } = useContext(SelectContext);

  const renderLink = localRenderLink || globalRenderLink;

  function renderLinkContent() {
    return <div>
      {typeof children === 'function' ? children(selected === index) : children}
    </div>
  }

  const styles = mergeClassnames(
    commonClasses,
    className
  );

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

  return renderLink ? (
    <Fragment>
      {renderLink({
        ...rest,
        "data-close-on-select": closeOnSelect,
        children: renderLinkContent(),
        "aria-disabled": disabled,
        onClick: clickAndClose,
        className: styles,
      })}
    </Fragment>
  ) : (
    <a
      {...rest}
      data-close-on-select={closeOnSelect}
      aria-disabled={disabled}
      onClick={clickAndClose}
      className={styles}
    >
      {renderLinkContent()}
    </a>
  );
}

export interface ButtonProps
  extends ListItemBaseProps,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode | ((selected: boolean) => ReactNode)
}

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
      className={mergeClassnames(
        commonClasses,
        className
      )}
    >
      {typeof children === 'function' ? children(selected === index) : children}
    </button>
  );
}

export default function ListItem(props: ButtonProps & LinkProps) {
  const Wrapper = props.href ? Link : Button;

  return <Wrapper {...props} />;
}
