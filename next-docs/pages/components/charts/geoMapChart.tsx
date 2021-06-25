import React from 'react';
import Table from '../../../components/Table';

export default function PageGeoMapChart() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Geo map chart</h1>
        <p className="text-lg mt-4">
          Based on <a className="underline" href="https://www.react-simple-maps.io/">react-simple-maps</a>.
        </p>
      </section>
      <section className="mt-8">
        <Table />
      </section>
    </>
  );
}
