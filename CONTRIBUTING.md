# Contributing

## Contents

1. [Git Strategy](#git-strategy)
2. [Code Standards](#code-standards)
3. [Code Style](#code-style)

---

## Git Strategy

### Commits

Commits follow the [Angular Commit Message Format](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). When committing changes, make use of the [Commitizen](https://github.com/commitizen/cz-cli) CLI to generate consistent commit messages:

```
yarn commit
```

### Branches

#### Base Branch

As a developer, you will you be branching and merging from `master`, our base branch.

Consider `origin/master` to always represent the latest code deployed to production.

#### Supporting Branches

Use supporting branches for all new **features** and **bug fixes**. Unlike the base branch, these branches have a limited life-time and should be removed after merging.

The different types of branches should be named as follows:

- **Feature**: `feature/feature-name`
- **Bug fix**: `fix/fix-name`

#### Workflow

1. Create the branch locally and then push to GitHub if it does not exist yet.

   A branch should always be 'publicly' available, and should never exist in just one developer's local repo.

1. Make a pull request.
1. Add the `in progress` tag until ready for review.
1. Periodically, keep changes up to date with master via `git rebase master`.
1. Grab a review and remove the `in progress` tag.
1. One approved, it's down to you to merge the branch into `master`. Code can **only** be contributed to `master` via using pull requests.
1. Delete your branch.

#### Feature Flags

Long-lived feature branches present problems when you need to build code on top of unfinished work. Merge unfinished features into the `master` branch (following the steps [outline above](#workflow)) so others can build off their work, but keep them hidden from your users and testers behind feature flags. Enable the flag in development to use the feature without the changes affecting anyone else. Once the feature is finished, you can remove the flags or use them to roll out to selected users and testers.

## Code Standards

### Accessibility

All features should attempt to conform to as many items on The A11Y Project's [Web Accessibility Checklist](https://a11yproject.com/checklist) as possible. If a checkbox can't be completed, the justification should be documented for future reference.

As part of our TypeScript linting process, we make use of [`react-a11y` rules](https://github.com/reactjs/react-a11y) (surfaced via [`tslint-microsoft-contrib`](https://github.com/Microsoft/tslint-microsoft-contrib)) to catch any common issues.

## Code Style

Code formatting is handled **automatically** via [Prettier](https://prettier.io/) on pre-commit. However, you could install an [IDE extension](https://prettier.io/docs/en/editors.html) or run manually via `yarn format <prettier-args>`.

Linting will catch any further non-formatting issues:

- [TSLint](https://palantir.github.io/tslint/)
  - **Config**: [tslint.json](./tslint.json)
  - **Note**: As TSLint does not yet support TypeScript project `references` [(palantir/tslint#4137)](https://github.com/palantir/tslint/issues/4137), TSLint must be executed via `lerna run` to treat each package correctly.

### Component Structure

#### File Structure

Separate concerns on a component basis, rather than the more traditional "style vs. function".

With [Emotion](https://emotion.sh) we can take advantage of keeping style, markup and logic tightly bound together as a single `.tsx` file. A component file should be defined in the following order:

1. Imports
1. External (e.g. `node_modules`)
1. Internal (i.e. a different package from the design system)
1. Component partials
1. Styles
1. Settings (e.g. `const`)
1. Helper functions
1. Markup / logic
1. Exports

#### Documentation

Each component/consumable feature **must** have a README that follows the appropriate package's pre-defined `.templates/`:

- [`packages/components`](packages/components/.templates/README.mdx)

This should be written in [`.mdx`](https://mdxjs.com/) syntax, which will be included automatically in the [Style Guide](./README.md#style-guide).

#### Directory Structure

For a basic component, the directory structure would look something like this:

```
+————————————+
│   Button   │
+————————————+


components
├── banner
├── button
│   ├── README.mdx
│   └── index.js
└── …
```

For larger components, consider breaking down into smaller partials:

```
+—————Banner——————+
│                 │
│      Title      │
│                 │
+—————————————————+
│                 │
│     Caption     │
│                 │
+—————————————————+


components
├── banner
│   ├── caption.tsx
│   ├── index.ts
│   ├── README.mdx
│   ├── settings.ts
│   ├── title.tsx
│   └── utils.ts
├── button
└── …
```

**`settings`**

Common constants/raw values that can be re-used across the different component partials.

**`utils`**

Styles that are unique to the `component` but need to be shared across the partials.

These styles should be **flat**/**stateless** and not bound by any form of functionality, making use of `css` in [Emotion](https://emotion.sh/docs/composition).

#### Naming

- **Components** should be defined in **PascalCase**.

  For example: `<Banner/>`

  - Component partials should be prefixed by the component name:

    For example: `<BannerTitle/>`

- **Flat re-usable styles** should be defined in **camelCase** to differentiate.

  - For example: `<div css={bannerSizing}/>`
