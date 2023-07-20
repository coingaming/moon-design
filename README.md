# Moon Design System

[![npm (scoped)](https://img.shields.io/npm/v/@heathmont/moon-components)](https://www.npmjs.com/package/@heathmont/moon-components)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<img width="644" alt="Moon Design System" src="https://user-images.githubusercontent.com/232199/133601344-e63bd62f-dd0f-47a1-9d1e-b5cb065e5a90.png">

## Installing Moon Design

0. [Install pnpm](https://pnpm.io/installation):


   ```sh
   corepack enable

   // Note that we are using pnpm version 8

   corepack prepare pnpm@8.2.0 --activate
   ```

1. Install dependencies and link local packages together:

   ```sh
   pnpm install
   ```

2. Compile and build all packages:

   ```sh
   pnpm run build
   ```

3. Run storybook for development:

   ```sh
   pnpm run next dev
   ```

4. For Hot Module Replacement Run these tasks in parallel tabs:


   ```sh
   pnpm run watch
   ```

   ```sh
   pnpm run next dev
   ```

5. Build and run storybook for production at `localhost:80`:

   ```sh
   pnpm run next build
   ```

   ```sh
   pnpm run next start
   ```

## Architecture

Our [pnpm](https://pnpm.io/motivation) monorepo publishes key layers as individual `@heathmont/moon-` packages:

1. [`next-docs/`](#docs) - style guide and documentation
2. [`workspaces/`](#design-system) - Moon Design System
2. [`packages/`](#design-system) - Legacy components, solely for supporting older projects.


Packages are developed inside their respective `src` folders, utilizing [pnpm workspaces](https://pnpm.io/workspaces) for dependency linking/sharing. The distributable code is generated in each package's lib by the TypeScript compiler.


## Contributing

If you're interested in contributing to Moon Design, please read our [сontributing docs](CONTRIBUTING.md) before submitting a pull request.
