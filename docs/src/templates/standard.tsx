import * as React from 'react';
import { graphql } from 'gatsby';
/* @TODO Revisit post-EPL */
/* eslint-disable import/no-named-default */
import { default as MDXRenderer } from 'gatsby-mdx/mdx-renderer';

import { default as Layout } from '../components/layout';
/* eslint-enable */

type MDX = {
  code: {
    body: string;
  };
};

type Data = {
  data: {
    mdx: MDX;
  };
};

export default ({ data: { mdx } }: Data) => {
  return (
    <Layout>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;
