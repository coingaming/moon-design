export type Base = {
  /**
   * ⚠️ Immutable
   *
   * Base FontSize and Base Space are immutable theme settings, in other words
   * the remain the same in **all** themes and *must not* be changed under any
   * circumstances.
   *
   * These settings are crucial for calculating values such as `rem` without
   * having to over-use theme hooks/context calls.
   *
   * If you need to adjust the body font-size, consider using the theme-specific
   * setting `fontSize.body`.
   *
   * If you need to adjust the space, make use of the `space` theme config.
   */
  readonly space: 16;
  readonly fontSize: 16;
  /**
   * ✅ Customisable
   *
   * Although the base.fontSize cannot be modified, the line-height can be
   * adjusted to suit your font-face use-case.
   */
  readonly lineHeight: number;
};
