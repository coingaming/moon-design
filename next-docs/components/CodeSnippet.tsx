import React from 'react';

const CodeSnippet = ({ children }) => (
  <pre className="bg-white px-4 py-3 text-left text-sm rounded-lg font-medium text-gray-500 ">
    {children}
  </pre>
);

export default CodeSnippet;
