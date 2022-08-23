import React from 'react';
import Collapsed from './private/Collapsed';
import Extended from './private/Extended';
import type BreadcrumbProps from './private/types/BreadcrumbProps';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => {
  if (!breadcrumbs) return null;

  const isCollapse = breadcrumbs?.length > 4;

  return isCollapse ? (
    <Collapsed breadcrumbs={breadcrumbs} />
  ) : (
    <Extended breadcrumbs={breadcrumbs} />
  );
};

export default Breadcrumb;
