// @ts-nocheck
import React from 'react';

import { SearchPopup } from '@heathmont/moon-components';

const PreviewSearchPopup = () => {
  return (
    <div className="h-96">
      <SearchPopup
        placeholder="Search results"
        closeButtonText="Close"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        onSubmit={(e) => {
          console.log('Submitted');
        }}
        results={[
          <span
            onClick={() => {
              console.log('Click');
            }}
          >
            First Game
          </span>,
          <span>Second Game</span>,
          <span>Third Game</span>,
        ]}
      />
    </div>
  );
};

const PreviewSearchPopupLoading = () => {
  return (
    <div className="h-40">
      <SearchPopup
        placeholder="Search"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        loadingMessage={<p>Loading...</p>}
      />
    </div>
  );
};

export default function PageSearchPopup() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Search Popup</h1>
        <p className="text-lg mt-4">An elegant search component.</p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <PreviewSearchPopup />
      </section>
      <section className="mt-8">
        <PreviewSearchPopupLoading />
      </section>
    </>
  );
}
