import React from 'react';
import PageSection from './PageSection';

const ComponentAnatomy: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <PageSection title="Anatomy">
    <pre className="flex w-full p-4 bg-goku rounded-moon-s-sm overflow-scroll text-moon-14 text-bulma">
      {children}
    </pre>
  </PageSection>
);

export default ComponentAnatomy;
