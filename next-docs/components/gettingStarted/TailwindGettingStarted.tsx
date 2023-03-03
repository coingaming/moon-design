import React from 'react';
import { Tabs } from '@heathmont/moon-core-tw';
import Link from 'next/link';
import CodeSnippet from '../CodeSnippet';
import PageSection from '../PageSection';
import DuoThemeExample from './DuoThemeExample';
import SingleThemeExample from './SingleThemeExample';

const TailwindGettingStarted = () => (
  <>
    <PageSection title="Overview">
      <p>
        <span className="font-medium">Moon Design System</span> is a collection
        of reusable components set up and grouped according to simple and clear
        standards. <span className="font-medium">Moon DS</span> component
        collection is the single source of truth that can be used to build any
        number of applications. Currently, to improve performance,{' '}
        <span className="font-medium">Moon DS</span> is moving to the Tailwind
        CSS framework instead of the Styled-components (CSS-in-JS styling
        framework) that was used previously.
      </p>
      <p className="font-medium">
        NB! Please note that the Moon DS, which is based on the
        Styled-components framework, is still maintained, but it is no longer
        updated with new components.{' '}
      </p>
    </PageSection>
    <PageSection title="Prerequisites">
      <p>Before you can use Moon DS, you need to do the following: </p>
      <ol className="flex flex-col gap-1 list-decimal list-inside">
        <li>
          Set <code className="bg-goku px-2 rounded-moon-s-xs">dir="ltr"</code>{' '}
          attribute to{' '}
          <code className="bg-goku px-2 rounded-moon-s-xs">html</code> tag.
        </li>
        <li>
          Install Tailwind CSS:{' '}
          <a
            href="https://tailwindcss.com/docs/installation"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CLI - Tailwind CSS
          </a>
        </li>
        <li>
          <span className="font-medium">
            NB! You need to be using the latest version of Tailwind CSS for the
            system to work.
          </span>
        </li>
        <li>
          <a href="#install">
            Install <span className="font-medium">Moon DS</span> in your
            project.
          </a>
        </li>
        <li>
          <a href="#config">
            Configure your project to use{' '}
            <span className="font-medium">Moon DS.</span>
          </a>
        </li>
        <li>
          <a href="#rtl">
            Install and configure{' '}
            <code className="bg-goku px-2 rounded-moon-s-xs">
              tailwindcss-rtl
            </code>
          </a>
        </li>
        <li>
          <a href="#themes">
            Install and configure the Themes package. (Optional)
          </a>
        </li>
        <li>
          <a href="#icons">
            Install and configure the Icons package. (Optional)
          </a>
        </li>
      </ol>
    </PageSection>
    <PageSection title="Installing Moon DS" id="install">
      <p>Run:</p>
      <CodeSnippet>pnpm i @heathmont/moon-core-tw</CodeSnippet>
    </PageSection>
    <PageSection title="Configuring the Project" id="config">
      <p>
        To configure your project to use{' '}
        <span className="font-medium">Moon DS</span> presets, add the following
        to{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs">
          tailwind.config.js
        </code>{' '}
        file:
      </p>
      <CodeSnippet>{`// tailwind.config
{ 
...
  content: [
    './node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [
    require('@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset'),
  ],
...
}
`}</CodeSnippet>
      <p className="font-medium">
        NB! Make sure you have the content list in{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs">
          tailwind.config.js
        </code>
        , that is pointing to all files using tailwind.
      </p>
      <p>
        Project-specific configurations contained in the{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs">
          tailwind.config.js
        </code>{' '}
        file are merged against presets in the same way they are merged against
        the default configuration. Also, you can always extend or redefine the
        existing classes in{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs">
          tailwind.config.js
        </code>{' '}
        file.
      </p>
      <p>
        For more information on configuring presets, see:{' '}
        <a
          href="https://tailwindcss.com/docs/presets"
          className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
          target="_blank"
          rel="noreferrer"
        >
          Presets - Tailwind CSS
        </a>
      </p>
    </PageSection>
    <PageSection title="Installing and adding tailwindcss-rtl plugin" id="rtl">
      <p>
        <code className="bg-goku px-2 rounded-moon-s-xs">tailwindcss-rtl</code>{' '}
        is a third-party plugin that provides new styles for Tailwind for
        right-to-left orientation.
      </p>
      <p>1. Run:</p>
      <CodeSnippet>{`npm i tailwindcss-rtl`}</CodeSnippet>
      <p>
        2. Add the plugin to your config{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs">
          tailwind.config.js
        </code>{' '}
        file:{' '}
      </p>
      <CodeSnippet>{`// tailwind.config
{ 
...
  plugins: [    
    require('tailwindcss-rtl'),   
  ], 
...
}
`}</CodeSnippet>
      <ul className="flex flex-col gap-1 list-disc list-inside">
        <li>
          {' '}
          For more information about tailwindcss-rtl plugin and the list of all
          extended classes, see npm:{' '}
          <a
            href="https://www.npmjs.com/package/tailwindcss-rtl"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            tailwindcss-rtl
          </a>
        </li>
        <li>
          {' '}
          For more information about customization with plugins, see{' '}
          <a
            href="https://tailwindcss.com/docs/plugins"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Plugins - Tailwind CSS
          </a>{' '}
        </li>
      </ul>
    </PageSection>
    <PageSection title="Moon DS additional information">
      <ul className="flex flex-col gap-1 list-disc list-inside">
        <li>
          Fonts and reset CSS are configured on the project side. For more
          information, see{' '}
          <a
            href="https://tailwindcss.com/docs/installation"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Installation: Tailwind CLI - Tailwind CSS
          </a>
          .
        </li>
        <li>
          Tailwind CSS IntelliSense is an extension that helps with writing
          tailwind code. All classes in our preset are supported by this tool.
          For more information on this extension, see{' '}
          <a
            href="https://tailwindcss.com/docs/editor-setup"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Editor Setup - Tailwind CSS
          </a>
          .
        </li>
      </ul>
    </PageSection>
    <PageSection title="Packages">
      <p>
        For now, <span className="font-medium">Moon DS</span> provides three
        packages ready for use in projects with Tailwind CSS:
      </p>
      <ul className="flex flex-col gap-1 list-disc list-inside">
        <li>
          <a href="#corePackage">Core Package</a>
        </li>
        <li>
          <a href="#themesPackage">Themes Package</a>
        </li>
        <li>
          <a href="#iconsPackage">Icons Package</a>
        </li>
      </ul>
    </PageSection>
    <PageSection title="Core Package" id="corePackage">
      <code className="bg-goku px-2 rounded-moon-s-xs self-start">
        @heathmont/moon-core-tw
      </code>
      <p>Run:</p>
      <CodeSnippet>{`pnpm i @heathmont/moon-core-tw`}</CodeSnippet>
      <p>
        This package contains the core components of{' '}
        <span className="font-medium">Moon DS</span> and a reusable preset with
        all configurations needed for using{' '}
        <span className="font-medium">Moon DS</span>.
      </p>
      <p>
        For the description of all ready-to-use components with examples, see
        the{' '}
        <Link
          href="/"
          className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
        >
          Moon Design System
        </Link>{' '}
        page, under Tailwind.
      </p>
      <p>
        This package is installed as part of Moon DS installation so you don't
        need to install it separately.
      </p>
    </PageSection>
    <PageSection title="Themes Package" id="themesPackage">
      <code className="bg-goku px-2 rounded-moon-s-xs self-start">
        @heathmont/moon-themes-tw
      </code>
      <p>Run:</p>
      <CodeSnippet>{`pnpm i @heathmont/moon-themes-tw`}</CodeSnippet>
      <p>
        This package contains all available themes as CSS files with configured
        tokens as CSS variables: main colours, support colours, border radius,
        border width, etc.
      </p>
      <p>
        For theming, we use CSS variables as tokens for styling various aspects
        of the website differently, while still maintaining the overall look and
        feel. You can import a CSS file with a particular theme from the
        package. The name of the CSS file corresponds to the name of the theme
        for a particular brand. Each file contains the Light and Dark modes.
      </p>
      <p>
        CSS variables are defined globally in the{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs">:root</code> element
        and also within the relevant class selector. Check your theme's CSS file
        for a proper class name. To switch between Light and Dark modes, you
        need to change classes. Usually, this main class has to be specified in
        a{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs self-start">body</code>{' '}
        tag or the corresponding wrapper container.
      </p>
      <p>Below there are two examples of a CSS configuration file:</p>
      <Tabs>
        <Tabs.Segment>
          <Tabs.Pill>Single theme</Tabs.Pill>
          <Tabs.Pill>Duo theme</Tabs.Pill>
        </Tabs.Segment>
        <Tabs.Panels>
          <Tabs.Panel>
            <SingleThemeExample />
          </Tabs.Panel>
          <Tabs.Panel>
            <DuoThemeExample />
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
      <p className="font-medium">NB! Setting up themes is optional.</p>
      <p>It is up to you how to set up themes inside your project.</p>
      <p>For example, you can do the following:</p>
      <CodeSnippet>{`@import '@heathmont/moon-themes-tw/lib/moon.css';`}</CodeSnippet>
      <p>
        Alternatively, you can copy-paste the tokens from{' '}
        <a
          href="https://github.com/coingaming/moon-design/tree/master/workspaces/themes/src"
          className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
          target="_blank"
          rel="noreferrer"
        >
          moon-design
        </a>
        , and add them to your project.
      </p>
      <p className="font-medium">
        Warning! Do not delete any tokens, please, as it can affect the work of
        Moon DS.
      </p>
    </PageSection>

    <PageSection title="Icons Package" id="iconsPackage">
      <code className="bg-goku px-2 rounded-moon-s-xs self-start">
        @heathmont/moon-icons-tw
      </code>
      <p>Run:</p>
      <CodeSnippet>{`pnpm i @heathmont/moon-icons-tw`}</CodeSnippet>
      <p>
        This package contains all SVG assets that you might need to build an
        application. They are ready to work with Tailwind CSS, so you can change
        the size and colour of icons with the help of TW classes.
      </p>
      <p>Example: </p>
      <CodeSnippet>{`import { FilesCopy } from '@heathmont/moon-icons-tw';

const Example = () => (
  <div className="flex justify-around gap-2 flex-wrap items-center w-full">
    <FilesCopy className="text-chichi text-moon-16" />
    <FilesCopy className="text-chichi text-moon-32" />
    <FilesCopy className="text-piccolo text-moon-48" />
    <FilesCopy className="text-cell text-moon-48" />
  </div>
);

export default Example;
`}</CodeSnippet>
      <p>
        For more information on <span className="font-medium">Moon DS</span>{' '}
        icons and icons preview, see:{' '}
        <Link
          href="/core/icons"
          className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
        >
          Moon Design System
        </Link>
      </p>
    </PageSection>
    <PageSection title="Useful Links">
      <ul className="flex flex-col gap-1 list-disc list-inside">
        <li>
          <a
            href="https://tailwindcss.com/docs/installation"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Installation: Tailwind CLI - Tailwind CSS
          </a>
          .
        </li>
        <li>
          <a
            href="https://tailwindcss.com/docs/editor-setup"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Editor Setup - Tailwind CSS
          </a>
          .
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/tailwindcss-rtl"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            npm: tailwindcss-rtl
          </a>
          .
        </li>
      </ul>
    </PageSection>
  </>
);

export default TailwindGettingStarted;
