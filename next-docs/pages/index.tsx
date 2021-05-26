import fs from 'fs';
import path from 'path';

import React from 'react';
import Head from 'next/head';
import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';

export async function getStaticProps(context: any) {
  const fileBuffer= await fs.promises
    .readFile(path.join('docs', 'test.mdx'));

  const res = fileBuffer.toString().trim();

  console.log('mdx', res);
  const resultNew = await bundleMDX(res, {
    files: {
      './demo.tsx': `
  import * as React from 'react'

  function Demo() {
    return <div>Neat demo!</div>
  }

  export default Demo
      `,
    },
  });

  const { code, frontmatter } = resultNew;
  console.log('code: ', code);
  console.log('frontmatter: ', frontmatter);
  return {
    props: {
      code,
      frontmatter,
    },
  };
}

export default function Home({ code, frontmatter }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <Head>
        <title>Moon Design System</title>
        <meta name="description" content="Moon Design System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-32 py-20">
        <h1 className="text-xl">{frontmatter.title}</h1>
        <Component />
      </main>
    </>
  );
}
