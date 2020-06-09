import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

/* eslint-disable import/no-named-default */
import { default as Layout } from '../components/layout';
/* eslint-enable */

type MDX = {
  body: string;
};

type Data = {
  data: {
    mdx: MDX;
  };
};

export default ({ data: { mdx } }: Data) => {
  return (
    <Layout>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
