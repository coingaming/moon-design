import React from 'react';

import { Tooltip } from '@heathmont/moon-components';

import Preview from '../../../components/codePreview/Preview';

const PreviewLineChart = () => {
  return <Preview title="Default" preview={<></>} code={``} />;
};

export default function PageLineChart() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Line chart</h1>
        <p className="text-lg mt-4">
          Based on{' '}
          <a className="underline" href="https://www.react-simple-maps.io/">
            react-simple-maps
          </a>
          .
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <PreviewLineChart />
      </section>
    </>
  );
}
