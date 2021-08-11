import React from 'react';
import { ArrowsRefresh } from '@heathmont/moon-icons';

import CodeSnippet from '../components/CodeSnippet';

const Text: React.FC<{}> = ({ children }) => (
  <p className="text-lg mt-4">{children}</p>
);

export default function PageIcons() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Icons</h1>
        <h2 className="text-3xl font-semibold mt-8">Installation</h2>

        <ArrowsRefresh fontSize="2rem"/>

        <Text>using npm</Text>
        <CodeSnippet>{`npm i @heathmont/moon-themes @heathmont/moon-core @heathmont/moon-components`}</CodeSnippet>

        <Text>using yarn</Text>
        <CodeSnippet>{`yarn add @heathmont/moon-themes @heathmont/moon-core @heathmont/moon-components`}</CodeSnippet>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold mt-8">Peer dependencies</h2>
      </section>

    </>
  );
}
