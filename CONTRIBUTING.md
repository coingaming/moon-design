# Contributing

## Git Strategy

### Commits

Commits follow the [Angular Commit Message Format](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). When committing changes, make use of the [Commitizen](https://github.com/commitizen/cz-cli) CLI to generate consistent commit messages:

```
yarn commit
```

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
