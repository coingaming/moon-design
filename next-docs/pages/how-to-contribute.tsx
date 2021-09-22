import React from 'react';
import CodeSnippet from '../components/CodeSnippet';

const Text: React.FC<{}> = ({ children }) => (
  <p className="text-lg mt-4">{children}</p>
);

export default function PageHowToContribute() {
  return (
    <>
      <section>
        <h1 className="text-5xl font-semibold">How to contribute</h1>
        <h2 className="text-3xl font-semibold mt-8">Setup</h2>

        <Text>Install `pnpm`:</Text>
        <CodeSnippet>{`npm install -g pnpm`}</CodeSnippet>
        <Text>
          Check{' '}
          <a className="underline" href="https://pnpm.io/installation">
            pnpm docs
          </a>{' '}
          for additional ways.
        </Text>

        <Text>Clone the repository:</Text>
        <CodeSnippet>{`git clone git@github.com:coingaming/moon-design.git`}</CodeSnippet>

        <Text>Install dependencies and link local packages together:</Text>
        <CodeSnippet>{`pnpm install`}</CodeSnippet>

        <Text>Compile and build all packages:</Text>
        <CodeSnippet>{`pnpm run build`}</CodeSnippet>

        <Text>Run storybook for development with Hot Module Replacement:</Text>
        <CodeSnippet>{`pnpm run watch`}</CodeSnippet>
        <CodeSnippet>{`pnpm run next dev`}</CodeSnippet>

        <Text>Build and run storybook for production at localhost:80:</Text>
        <CodeSnippet>{`pnpm run next build`}</CodeSnippet>
        <CodeSnippet>{`pnpm run next start`}</CodeSnippet>
      </section>
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mt-8">Check our githib</h2>

        <ul className="list-inside list-disc mt-4">
          <li className="text-lg">
            <a
              className="hover:underline"
              href="https://github.com/coingaming/moon-design"
            >
              Github repository
            </a>
          </li>
          <li className="text-lg">
            <a
              className="hover:underline"
              href="https://github.com/coingaming/moon-design/blob/develop/CONTRIBUTING.md"
            >
              Contributing page
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
