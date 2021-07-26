import fs from 'fs';
import path from 'path';

import React from 'react';
import Head from 'next/head';
import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';

export async function getStaticProps(context: any) {
  const mdxFileBuffer = await fs.promises.readFile(
    path.join('docs', 'button.mdx')
  );
  const mdxFile = mdxFileBuffer.toString().trim();

  const componentFileBuffer = await fs.promises.readFile(
    path.join('../packages/components/src/button/', 'Button.tsx')
  );
  const componentFile = componentFileBuffer.toString().trim();

  //   const resultNew = await bundleMDX(mdxFile, {
  //     files: {
  //       './demo.tsx': `
  //   import * as React from 'react'

  //   function Demo() {
  //     return <button
  //     type="button"
  //     class="inline-flex items-center px-4 py-3 border border-transparent leading-6 font-medium rounded-full text-goten bg-blue-500 hover:bg-piccolo-80 focus:outline-none"
  //   >
  //     Button text
  //   </button>
  //   }

  //   export default Demo
  //       `,
  //     },
  //   });

  const resultNew = await bundleMDX(mdxFile, {
    files: {
      './button.tsx': componentFile,
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

export default function Home({ code, frontmatter }: any) {
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
