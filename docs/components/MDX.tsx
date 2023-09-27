import { MDXRemote } from 'next-mdx-remote/rsc'

export function MDX({ markdown }: { markdown: string }) {
  /*
    An error is triggered by `next-mdx-remote/rsc`:
    "'MDXRemote' cannot be used as a JSX component."
    https://github.com/hashicorp/next-mdx-remote/issues/366
  */
  return <MDXRemote source={markdown} />
}

