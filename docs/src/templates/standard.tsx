import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

/* eslint-disable import/no-named-default */
import { default as Layout } from '../components/layout';
import Breadcrumbs from '../components/Breadcrumbs';
/* eslint-enable */

type MDX = {
  body: string;
  frontmatter: {
    route: string;
    menu: string;
    name: string;
    title: string;
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
      <div className="mb-8">
        <Breadcrumbs
          menu={mdx.frontmatter.menu}
          name={mdx.frontmatter.name || mdx.frontmatter.title}
          route={mdx.frontmatter.route}
        />
      </div>
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
        menu
        name
        title
      }
    }
  }
`;
