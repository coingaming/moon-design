import React from 'react';

const ComponentAnatomy: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-moon-24 font-medium">Anatomy</h2>
      <div className="p-4 flex bg-goku rounded-moon-s-sm">
        <pre className="w-full overflow-scroll text-moon-14 text-bulma">
          {children}
        </pre>
      </div>
    </div>
  );
};

export default ComponentAnatomy;
