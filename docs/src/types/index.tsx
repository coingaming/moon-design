type Frontmatter = {
  name: string;
  route?: string;
  menu?: string;
};

type ConfigNode = {
  node: {
    designSections: [string];
  };
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
  config: {
    edges: [ConfigNode];
  };
};

type Children = {
  children?: JSX.Element[] | JSX.Element;
};

export { PagesData, Children, Frontmatter };
