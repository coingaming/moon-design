import React from 'react';
import { ArrowsRight } from '@heathmont/moon-icons-tw';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import type BreadcrumbProps from './types/BreadcrumbProps';

const Extended: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => (
  <nav aria-label="Breadcrumb">
    <ol className="flex flex-wrap gap-2 items-center text-moon-14">
      {breadcrumbs.length > 0 &&
        breadcrumbs.map((crumb, index) => (
          <li
            key={'crumb' + index}
            className="flex items-center gap-2 text-trunks"
          >
            {index !== 0 && (
              <ArrowsRight className="rtl:rotate-180 text-moon-16" />
            )}
            <span
              className={mergeClassnames(
                'text-trunks transition-colors duration-200 hover:text-bulma',
                index === breadcrumbs.length - 1 && 'text-bulma font-medium'
              )}
            >
              {crumb && crumb}
            </span>
          </li>
        ))}
    </ol>
  </nav>
);

export default Extended;
