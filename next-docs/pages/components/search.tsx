import React from 'react';

import { Search } from '@heathmont/moon-core';
import { IconProfile } from '@heathmont/moon-assets';

const PreviewSearch = () => {
  return (
    <div className="h-96 bg-white p-4">
      <Search
        closeButton={<span>Clear</span>}
        placeholder="Search"
        size="small"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value);
        }}
        onSubmit={(e: React.FormEvent) => {
          console.log('Submitted', e);
        }}
        results={
          <>
            <li>Categories</li>
            <li>
              <button>Btn 1</button>
              <button>Btn 1</button>
            </li>
            <li>Recent Searches</li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <IconProfile /> First Game
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <IconProfile /> Second Game
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <IconProfile /> Third Game
            </li>
          </>
        }
      />
    </div>
  );
};

const PreviewSearchLoading = () => {
  return (
    <div className="h-40 bg-white p-4">
      <Search
        placeholder="Search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value);
        }}
        results={<li>Loading...</li>}
      />
    </div>
  );
};

export default function PageSearch() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Search</h1>
        <p className="text-lg mt-4">An elegant search component.</p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <h2 className="text-2xl mb-4">Search component default values</h2>
        <PreviewSearch />
      </section>
      <section className="mt-8">
        <h2 className="text-2xl mb-4">Search loading</h2>
        <PreviewSearchLoading />
      </section>
    </>
  );
}
