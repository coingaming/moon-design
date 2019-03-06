import { PagesData } from '../../types';
const sections = [
  'Global',
  'Tokens',
  'Objects',
  'Icons',
  'Components',
  'Utils',
];

export const transformSections = (data: PagesData) =>
  sections.map(section => {
    const sectionPages = data.pages.edges
      .filter(({ node }) => node.frontmatter.menu === section)
      .map(({ node }) => ({
        ...node.frontmatter,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    const sectionRoot = data.pages.edges.filter(
      page => page.node.frontmatter.name === section
    )[0];

    const sectionMeta = sectionPages.length
      ? { pages: sectionPages }
      : { route: sectionRoot.node.frontmatter.route };

    return {
      name: section,
      ...sectionMeta,
    };
  });
