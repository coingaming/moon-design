declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module '@mdx-js/tag';
declare module 'gatsby-mdx/mdx-renderer';
declare module 'mdx-utils';
