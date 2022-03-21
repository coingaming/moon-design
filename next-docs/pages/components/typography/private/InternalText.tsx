import React from 'react';

const InternalText: React.FC<{}> = ({ children }) => (
  <p className="text-lg mt-4">{children}</p>
);

export default InternalText;
