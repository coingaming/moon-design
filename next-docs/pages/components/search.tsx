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
        results={{
          title: <span>Recent searches</span>,
          items: [
            <span
              onClick={() => {
                console.log('Click');
              }}
              style={{ display: 'flex', gap: '10px' }}
            >
              <IconProfile /> First Game
            </span>,
            <span style={{ display: 'flex', gap: '10px' }}>
              <IconProfile /> Second Game
            </span>,
            <span style={{ display: 'flex', gap: '10px' }}>
              <IconProfile /> Third Game
            </span>,
          ],
        }}
        tabs={{
          title: <span>I'm looking for...</span>,
          items: [
            <button
              onClick={() => {
                console.log('Click');
              }}
            >
              First Game
            </button>,
            <button>Second Game</button>,
            <button>Third Game</button>,
            <button style={{ display: 'flex', gap: '10px' }}>
              <IconProfile /> Third Game
            </button>,
            <button style={{ display: 'flex', gap: '10px' }}>
              <IconProfile /> Third Game
            </button>,
            <button style={{ display: 'flex', gap: '10px' }}>
              <IconProfile /> Third Game
            </button>,
            <button style={{ display: 'flex', gap: '10px' }}>
              <IconProfile /> Third Game
            </button>,
            <button style={{ display: 'flex', gap: '10px' }}>
              <IconProfile /> Third Game
            </button>,
          ],
        }}
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
        loadingMessage={<p>Loading...</p>}
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
