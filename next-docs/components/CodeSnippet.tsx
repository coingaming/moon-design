import React from 'react';

const CodeSnippet: React.FC<{}> = ({ children }) => (
  <pre className="overflow-scroll bg-white mt-4 px-4 py-3 text-left text-sm rounded-lg font-medium text-gray-500 ">
    {children }
  </pre>
);

export default CodeSnippet;
