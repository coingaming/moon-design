import * as React from 'react';
import { MDXProvider } from '@mdx-js/tag';

import { mdxComponents } from './config';
import { DocsThemeProvider } from './provider';

export const wrapRootElement = ({ element }) => (
  <DocsThemeProvider>
    <MDXProvider components={mdxComponents}>{element}</MDXProvider>
  </DocsThemeProvider>
);
