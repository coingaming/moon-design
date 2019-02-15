type Frontmatter = {
  name: string;
  route?: string;
  menu?: string;
};

type PageNode = {
  node: {
    frontmatter: Frontmatter;
  };
};

type PagesData = {
  pages: {
    edges: [PageNode];
  };
};

type Children = {
  children?: JSX.Element[] | JSX.Element;
};

export { PagesData, Children, Frontmatter };
