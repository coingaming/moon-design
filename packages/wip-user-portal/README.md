# User Portal

> **Note**: this package is temporary to ease user portal development alongside the Design System. It will be moved from the repo upon completion.

## Usage

Ensure you are running the commands from the **root** of the repo (to make use of Lerna), **not** the package directory:

```sh
cd ../../
```

Each script in this package can then be run via `yarn user-portal <script-name>`:

- `yarn user-portal build` - creates a static isomorphic build.
- `yarn user-portal dev` - starts a hot-reloading development environment at [localhost:7024](http://localhost:7024/).
