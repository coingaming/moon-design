// @ts-nocheck
import React from 'react';

import { Search } from '@heathmont/moon-components';

import Preview from '../../components/codePreview/Preview';

const PreviewSearch = () => {
  return (
    <Preview
      title="Results"
      preview={
        <div className="h-96">
          <Search
            placeholder="Search results"
            onChange={(e) => {
              console.log(e.target.value);
            }}
            onSubmit={(e) => {
              console.log('Submitted');
            }}
            results={[
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
                  <span>Second Game</span>,
                  <span>Third Game</span>,
                ],
              },
              {
                title: <span>Providers</span>,
                items: [
                  <span>Provider One</span>,
                  <span>Provider Two</span>,
                  <span>Provider Three</span>,
                ],
              },
            ]}
          />
        </div>
      }
      code={`import { Search } from '@heathmont/moon-components';

<Search
  placeholder="Search"
  onChange={(e) => {
    console.log(e.target.value);
  }}
  onSubmit={(e) => {
    console.log('Submitted');
  }}
  results={[
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
        <span>Second Game</span>,
        <span>Third Game</span>,
      ],
    },
    {
      title: <span>Providers</span>,
      items: [
        <span>Provider One</span>,
        <span>Provider Two</span>,
        <span>Provider Three</span>,
      ],
    },
  ]}
/>
`}
    />
  );
};

const PreviewSearchLoading = () => {
  return (
    <Preview
      title="Loading message"
      preview={
        <div className="h-40">
          <Search
            placeholder="Search"
            onChange={(e) => {
              console.log(e.target.value);
            }}
            loadingMessage={<p>Loading...</p>}
          />
        </div>
      }
      code={`import { Search } from '@heathmont/moon-components';

<Search
  placeholder="Search"
  onChange={e => {
    console.log(e.target.value);
  }}
  loadingMessage={<p>Loading...</p>}
/>
`}
    />
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
