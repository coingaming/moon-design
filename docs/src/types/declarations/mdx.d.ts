declare module '*.mdx' {
  /* Handled by MDX */
  /* eslint-disable-next-line import/no-mutable-exports, @typescript-eslint/no-explicit-any */
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module '@mdx-js/tag';
declare module 'gatsby-mdx/mdx-renderer';
declare module 'mdx-utils';
