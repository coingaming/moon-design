import { rem } from "polished";
import { base, spacing as spacingTokens } from "@heathmont/sportsbet-tokens";

export const spacing = (size = "default") =>
  rem(spacingTokens[size], base.fontSize) || 0;
