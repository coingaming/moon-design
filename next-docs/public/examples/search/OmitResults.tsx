import React from 'react';
import { Search } from '@heathmont/moon-core';

const Example = () => {
  const [searchString, setSearchString] = React.useState('');

  return (
    <div className="bg-white p-4 w-full">
      <Search
        closeButton={<span>Clear</span>}
        placeholder="Search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchString(e.target.value)}
        onSubmit={(e) => e.preventDefault()}
        onClear={() => setSearchString('')}
        omitResults={true}
      />
    </div>
  );
};

export default Example;
