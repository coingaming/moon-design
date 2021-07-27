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

        <Text>Clone the repository:</Text>
        <CodeSnippet>{`git clone git@github.com:coingaming/moon-design.git`}</CodeSnippet>

        <Text>Install dependencies and link local packages together:</Text>
        <CodeSnippet>{`yarn`}</CodeSnippet>

        <Text>Compiles lib folder for each package:</Text>
        <CodeSnippet>{`yarn build`}</CodeSnippet>

        <Text>Generates a static build of the style guide:</Text>
        <CodeSnippet>{`yarn next dec`}</CodeSnippet>
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
