/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { headingSizes, HeadingSizes } from "./sizes";
jsx;

export type HeadingProps = {
  size: HeadingSizes;
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  color?: string;
};

export const Heading: React.SFC<HeadingProps> = ({
  element,
  size,
  color,
  ...rest
}) => {
  return jsx(element, {
    css: [{ color }, size && headingSizes[size]],
    ...rest
  });
};

Heading.defaultProps = {
  element: "p",
  color: "inherit"
};
