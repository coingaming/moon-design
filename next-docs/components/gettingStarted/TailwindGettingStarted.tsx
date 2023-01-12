import React from 'react';
import Link from 'next/link';
import CodeSnippet from '../CodeSnippet';
import PageSection from '../PageSection';

const TailwindGettingStarted = () => (
  <>
    <PageSection title="Overview">
      <p>
        <span className="font-medium">Moon Design System</span> is a collection
        of reusable components set up and grouped according to simple and clear
        standards. <span className="font-medium">Moon DS</span> component
        collection is the single source of truth that can be used to build any
        number of applications. Currently, to improve performance,{' '}
        <span className="font-medium">Moon DS</span> is moving to Tailwind CSS
        framework instead of the Styled-components (CSS-in-JS styling framework)
        that was used previously.
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
      <CodeSnippet>{`pnpm i @heathmont/moon-core-tw`}</CodeSnippet>
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
          information, see:{' '}
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
          For more information on this extension, see:{' '}
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
        <Link href="/">
          <a className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit">
            {' '}
            Moon Design System
          </a>
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
        tokens as CSS variables: main colors, support colors, border radius,
        border width, etc.
      </p>
      <p>
        For theming, we use CSS variables as tokens for styling various aspects
        of the website in a different way, while still maintaining the overall
        look and feel. You can import a CSS file with a particular theme from
        the package. The name of the CSS file corresponds to the name of the
        theme for a particular brand. Each file contains the Light and Dark
        modes.
      </p>
      <p>
        CSS variables are defined globally in the{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs">:root</code> element
        and also within the relevant class selector. To switch between Light and
        Dark mode, you need to change classes.
      </p>
      <p>
        Below is an example of a CSS file configured for the moon.io website:
      </p>
      <CodeSnippet>{`:root.theme-light,
.theme-light {
  --piccolo: 78 70 180; /* #4e46b4 */
  --hit: 64 166 159; /* #40a69f */
  --beerus: 235 235 235; /* #ebebeb */
  --gohan: 255 255 255; /* #ffffff */
  --goten: 255 255 255; /* #ffffff */
  --goku: 245 245 245; /* #f5f5f5 */
  --bulma: 0 0 0; /* #000000 */
  --trunks: 153 156 160; /* #999ca0 */
  --popo: 0 0 0; /* #000000 */

  /* support-colors  */
  --krillin: 255 179 25; /* #ff9800 */
  --krillin-60: 255 179 25 / 0.56; /* #ff9800 */
  --krillin-10: 255 179 25 / 0.08; /* #ff9800 */

  --chichi: 255 78 100; /* #ff4e64 */
  --chichi-60: 255 78 100 / 0.56; /* #ff4e64 */
  --chichi-10: 255 78 100 / 0.08; /* #ff4e64 */

  --roshi: 46 125 50; /* #2e7d32 */
  --roshi-60: 46 125 50 / 0.56; /* #2e7d32 */
  --roshi-10: 46 125 50 / 0.08; /* #2e7d32 */

  --dodoria: 211 48 48; /* #d33030 */
  --dodoria-60: 211 48 48 / 0.56; /* #d33030 */
  --dodoria-10: 211 48 48 / 0.08; /* #d33030 */

  --cell: 149 241 213; /* #95f1d5 */
  --cell-60: 149 241 213 / 0.56; /* #95f1d5 */
  --cell-10: 149 241 213 / 0.08; /* #95f1d5 */

  --raditz: 179 128 74; /* #b3804a */
  --raditz-60: 179 128 74 / 0.56; /* #b3804a */
  --raditz-10: 179 128 74 / 0.08; /* #b3804a */

  --whis: 52 72 240; /* #3448f0 */
  --whis-60: 52 72 240 / 0.56; /* #3448f0 */
  --whis-10: 52 72 240 / 0.08; /* #3448f0 */

  --frieza: 92 51 207; /* #5c33cf */
  --frieza-60: 92 51 207 / 0.56; /* #5c33cf */
  --frieza-10: 92 51 207 / 0.08; /* #5c33cf */

  --nappa: 114 85 80; /* #725550 */
  --nappa-60: 114 85 80 / 0.56; /* #725550 */
  --nappa-10: 114 85 80 / 0.08; /* #725550 */

  /* border-radius */
  --radius-i-xs: 0.25rem; /* 4px */
  --radius-i-sm: 0.5rem; /* 8px */
  --radius-i-md: 0.75rem; /* 12px */
  --radius-s-xs: 0.25rem; /* 4px */
  --radius-s-sm: 0.5rem; /* 8px */
  --radius-s-md: 0.75rem; /* 12px */
  --radius-s-lg: 1rem; /* 16px */

  /* border-width */
  --border-width: 0.0625rem; /* 1px */
  --border-i-width: 0.125rem; /* 2px */

  /* opacity */
  --opacity-moon: 0.32;

  /* fonts */
  --averta: 'Averta Std';

  /* box-shadow */
  --shadow-xs: 0px 4px 12px -6px rgb(0 0 0 / 0.06);
  --shadow-sm: 0 6px 6px -6px rgb(0 0 0 / 0.16), 0 0 1px rgb(0 0 0 / 0.4);
  --shadow-md: 0 12px 12px -6px rgb(0 0 0 / 0.16), 0 0 1px rgb(0 0 0 / 0.4);
  --shadow-lg: 0 8px 24px -6px rgb(0 0 0 / 0.16), 0 0 1px rgb(0 0 0 / 0.4);
  --shadow-xl: 0px 32px 32px -8px rgb(0 0 0 / 0.08),
    0px 0px 32px -8px rgb(0 0 0 / 0.12), 0px 0px 1px rgb(0 0 0 / 0.2);
}

:root.theme-dark,
.theme-dark {
  --piccolo: 91 80 238; /* #5b50ee */
  --hit: 64 166 159; /* #40a69f */
  --beerus: 68 68 68; /* #444444 */
  --gohan: 31 31 31; /* #1f1f1f */
  --goten: 255 255 255; /* #ffffff */
  --goku: 11 11 11; /* #0b0b0b */
  --bulma: 255 255 255; /* #ffffff */
  --trunks: 153 156 160; /* #999ca0 */
  --popo: 0 0 0; /* #000000 */

  /* support-colors  */
  --krillin: 255 179 25; /* #ff9800 */
  --krillin-60: 255 179 25 / 0.56; /* #ff9800 */
  --krillin-10: 255 179 25 / 0.08; /* #ff9800 */

  --chichi: 255 78 100; /* #ff4e64 */
  --chichi-60: 255 78 100 / 0.56; /* #ff4e64 */
  --chichi-10: 255 78 100 / 0.08; /* #ff4e64 */

  --roshi: 46 125 50; /* #2e7d32 */
  --roshi-60: 46 125 50 / 0.56; /* #2e7d32 */
  --roshi-10: 46 125 50 / 0.08; /* #2e7d32 */

  --dodoria: 211 48 48; /* #d33030 */
  --dodoria-60: 211 48 48 / 0.56; /* #d33030 */
  --dodoria-10: 211 48 48 / 0.08; /* #d33030 */

  --cell: 149 241 213; /* #95f1d5 */
  --cell-60: 149 241 213 / 0.56; /* #95f1d5 */
  --cell-10: 149 241 213 / 0.08; /* #95f1d5 */

  --raditz: 179 128 74; /* #b3804a */
  --raditz-60: 179 128 74 / 0.56; /* #b3804a */
  --raditz-10: 179 128 74 / 0.08; /* #b3804a */

  --whis: 52 72 240; /* #3448f0 */
  --whis-60: 52 72 240 / 0.56; /* #3448f0 */
  --whis-10: 52 72 240 / 0.08; /* #3448f0 */

  --frieza: 92 51 207; /* #5c33cf */
  --frieza-60: 92 51 207 / 0.56; /* #5c33cf */
  --frieza-10: 92 51 207 / 0.08; /* #5c33cf */

  --nappa: 114 85 80; /* #725550 */
  --nappa-60: 114 85 80 / 0.56; /* #725550 */
  --nappa-10: 114 85 80 / 0.08; /* #725550 */

  /* border-radius */
  --radius-i-xs: 0.25rem; /* 4px */
  --radius-i-sm: 0.5rem; /* 8px */
  --radius-i-md: 0.75rem; /* 12px */
  --radius-s-xs: 0.25rem; /* 4px */
  --radius-s-sm: 0.5rem; /* 8px */
  --radius-s-md: 0.75rem; /* 12px */
  --radius-s-lg: 1rem; /* 16px */

  /* border-width */
  --border-width: 0.0625rem; /* 1px */
  --border-i-width: 0.125rem; /* 2px */

  /* opacity */
  --opacity-moon: 0.32;

  /* fonts */
  --averta: 'Averta Std';

  /* box-shadow */
  --shadow-xs: 0px 4px 12px -6px rgb(0 0 0 / 0.64);
  --shadow-sm: 0px 6px 6px -6px rgb(0 0 0 / 0.64), 0px 0px 1px rgb(0 0 0 / 0.56);
  --shadow-md: 0px 12px 12px -6px rgb(0 0 0 / 0.64),
    0px 0px 1px rgb(0 0 0 / 0.56);
  --shadow-lg: 0px 24px 24px -6px rgb(0 0 0 / 0.64),
    0px 0px 1px rgb(0 0 0 / 0.56);
  --shadow-xl: 0px 48px 48px -6px rgb(0 0 0 / 0.88),
    0px 0px 1px rgb(0 0 0 / 0.72);
}
`}</CodeSnippet>
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
        the size and color of icons with the help of TW classes.
      </p>
      <p>Example: </p>
      <CodeSnippet>{`import { FilesCopy } from '@heathmont/moon-icons-tw';

const Example = () => (
  <div className="flex justify-around gap-2 flex-wrap items-center w-full">
    <FilesCopy className="text-chichi text-[1rem]" />
    <FilesCopy className="text-chichi text-[2rem]" />
    <FilesCopy className="text-piccolo text-[3rem]" />
    <FilesCopy className="text-cell text-[3rem]" />
  </div>
);

export default Example;
`}</CodeSnippet>
      <p>
        For more information on <span className="font-medium">Moon DS</span>{' '}
        icons and icons preview, see:{' '}
        <Link href="/core/icons">
          <a className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit">
            Moon Design System
          </a>
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
