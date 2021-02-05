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
  tableOfContents: {
    items: {
      url: string;
      title: string;
      items: any;
    }[];
  };
};

type Data = {
  data: {
    mdx: MDX;
  };
};

const Navigation = ({ mainItems }) => {
  return (
    <div className="">
      {mainItems.map(({ url, title, items }) => {
        // const Link = () => ;
        if (items) {
          const subItems = <Navigation mainItems={items} />;
          return (
            <>
              <div>
                <a href={url}>{title}</a>
              </div>
              <div className="ml-4">{subItems}</div>
            </>
          );
        }
        return (
          <div>
            <a href={url}>{title}</a>
          </div>
        );
      })}
    </div>
  );
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
      <nav className="bg-gohan text-bulma text-sm px-8 py-4 rounded mb-12 md:fixed md:right-8 md:top-16">
        <h5 className="text-bulma font-semibold mb-2">Summary:</h5>
        <Navigation mainItems={mdx.tableOfContents.items} />
      </nav>
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
      tableOfContents
    }
  }
`;
