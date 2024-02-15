import React from 'react';
import Collapsed from './private/Collapsed';
import Extended from './private/Extended';
import type Props from './private/types/Props';

const Breadcrumb = ({ breadcrumbs, divider, collapseAfter = 4}: Props) => {
  if (!breadcrumbs) return null;
  const isCollapse = breadcrumbs?.length > collapseAfter;
  return isCollapse ? (
    <Collapsed breadcrumbs={breadcrumbs} divider={divider} />
  ) : (
    <Extended breadcrumbs={breadcrumbs} divider={divider} />
  );
};

export default Breadcrumb;
