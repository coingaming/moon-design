/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";
import { spacing } from "@heathmont/sportsbet-utils";
jsx;

export type CardToggleProps = {
  back?: boolean;
};

/**
 * Styles
 */
const cardToggle = css({
  position: "absolute",
  top: spacing(),
  right: spacing(),
  background: "none",
  padding: 0,
  cursor: "pointer",
  border: "none",
  /* Temporary styles until Icons implemented */
  fontSize: "0.9rem",
  lineHeight: "1.4rem"
});

/**
 * Component
 */
export const CardToggle: React.SFC<CardToggleProps> = ({ back }) => {
  const icon = !back ? "⚙️" : "↩️";

  return <button css={cardToggle}>{icon}</button>;
};

CardToggle.defaultProps = {
  back: false
};
