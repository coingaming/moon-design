import fs from 'fs';
import path from 'path';

import React from 'react';
import Head from 'next/head';
import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';

export async function getStaticProps(context: any) {
  const fileBuffer = await fs.promises.readFile(path.join('docs', 'test.mdx'));

  const res = fileBuffer.toString().trim();

  console.log('mdx', res);
  const resultNew = await bundleMDX(res, {
    files: {
      './demo.tsx': `
  import * as React from 'react'

  function Demo() {
    return <h2>Neat demo!!!!!! 222</h2>
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
      <h1 className="text-xl">{frontmatter.title}</h1>
      <Component />
    </>
  );
}
