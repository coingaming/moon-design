import React from 'react';

import { Search } from '@heathmont/moon-core';

const PreviewSearch = () => {
  return (
    <div className="h-96 bg-white p-4">
      <Search
        placeholder="Core Search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value);
        }}
        suurus="medium"
        onSubmit={(e: React.FormEvent) => {
          console.log('Submitted', e);
        }}
        searchResults={{
          links: [
            {
              title: <span>Games</span>,
              items: [
                <span
                  onClick={() => {
                    console.log('Click');
                  }}
                >
                  First Game
                </span>,
                <span>Provider One</span>
              ]
            },
            {
              title: <span>Links 2</span>,
              items: [
                <span
                  onClick={() => {
                    console.log('Click');
                  }}
                >
                  First Game
                </span>,
                <span>Provider One</span>
              ]
            },
          ],
          categories: [
            {
              title: <span>Games</span>,
              items: [
                <span
                  onClick={() => {
                    console.log('Click');
                  }}
                >
                  First Game
                </span>,
                <span>Provider One</span>
              ]
            },
          ],
          items: [
            {
              title: <span>Games</span>,
              items: [
                <span
                  onClick={() => {
                    console.log('Click');
                  }}
                >
                  First Game
                </span>,
                <span>Provider One</span>
              ]
            },
          ]
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
        <PreviewSearch />
      </section>
      <section className="mt-8">
        <PreviewSearchLoading />
      </section>
    </>
  );
}
