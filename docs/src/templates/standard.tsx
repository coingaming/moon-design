import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { default as Layout } from '../components/layout';
import Breadcrumbs from '../components/Breadcrumbs';

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

const Navigation = ({ mainItems }) => (
    <div className="">
      {mainItems.map(({ url, title, items }) => {
        // const Link = () => ;
        if (items) {
          const subItems = <Navigation mainItems={items} />;
          return (
            <>
              <div>
                <Link to={url}>{title}</Link>
              </div>
              <div className="ml-4">{subItems}</div>
            </>
          );
        }
        return (
          <div>
            <Link to={url}>{title}</Link>
          </div>
        );
      })}
    </div>
);

export default ({ data: { mdx } }: Data) => (
    <Layout>
      <div className="mb-8">
        <Breadcrumbs
          menu={mdx.frontmatter.menu}
          name={mdx.frontmatter.name || mdx.frontmatter.title}
          route={mdx.frontmatter.route}
        />
      </div>
      <nav className="bg-gohan text-bulma text-sm px-8 py-4 rounded mb-12 2xl:fixed 2xl:right-8 2xl:top-16">
        <h5 className="text-bulma font-semibold mb-2">Summary:</h5>
        <Navigation mainItems={mdx.tableOfContents.items} />
      </nav>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
);

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
