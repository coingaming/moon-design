import * as React from 'react';
import { MDXProvider } from '@mdx-js/tag';

import { mdxComponents } from './config';

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={mdxComponents}>{element}</MDXProvider>
);
