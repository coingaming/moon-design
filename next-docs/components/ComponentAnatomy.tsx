import React from 'react';
import PageSection from './PageSection';

const ComponentAnatomy: React.FC = ({ children }) => {
  return (
    <PageSection title="Anatomy">
      <div className="p-4 flex bg-goku rounded-moon-s-sm">
        <pre className="w-full overflow-scroll text-moon-14 text-bulma">
          {children}
        </pre>
      </div>
    </PageSection>
  );
};

export default ComponentAnatomy;
