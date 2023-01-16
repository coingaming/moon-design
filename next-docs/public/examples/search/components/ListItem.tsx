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
import { mergeClassnames } from '@heathmont/moon-core-tw';

export type ListItemType = "Link" | "Action";

function getListItemWrapperStyles(selected: boolean, disabled?: boolean) {
  return mergeClassnames(
    "command-palette-list-item block w-full text-left px-3.5 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-1 focus:ring-gray-300 focus:outline-none flex items-center space-x-2.5 justify-between",
    selected && !disabled
      ? "bg-gray-200/50 dark:bg-gray-800"
      : "bg-transparent",
    disabled
      ? "cursor-default pointer-events-none opacity-50"
      : "cursor-pointer"
  );
}

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
    return (
      <ListItemContent
        type={showType ? "Link" : undefined}
      >
        {children}
      </ListItemContent>
    );
  }

  const styles = mergeClassnames(
    getListItemWrapperStyles(selected === index, disabled),
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
    > {}

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
        getListItemWrapperStyles(selected === index, rest.disabled),
        className
      )}
    >
      <ListItemContent
        type={showType ? "Action" : undefined}
      >
        {children}
      </ListItemContent>
    </button>
  );
}

interface ListItemContentProps {
  children: ReactNode;
  type?: ListItemType;
}

function ListItemContent({
  children,
  type,
}: ListItemContentProps) {
  return (
    <>
      <div className="flex w-full items-center space-x-2.5">
        {/* {ListItemIcon &&
          (typeof ListItemIcon === "string" ? (
            <span>Icon</span>
          ) : (
            <ListItemIcon className="w-5 h-5 text-gray-500" />
          ))} */}

        {typeof children === "string" ? (
          <span className="truncate max-w-md dark:text-white">{children}</span>
        ) : (
          children
        )}
      </div>

      {type && <span className="text-gray-500 text-sm">{type}</span>}
    </>
  );
}

export default function ListItem(props: ButtonProps & LinkProps) {
  const Wrapper = props.href ? Link : Button;

  return <Wrapper {...props} />;
}
