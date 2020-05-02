# Monorepo Typescript Template

Template to develop apps with typescript inside a monorepo

It use:

- [x] Lerna to manage the monorepo
- [x] Yarn as package manager
- [x] Common jest configuration for all projects inside the monorepo
- [x] Husky to hooks
  - `precommit` will lint your files
  - `prepush` will run unit test
- [x] Github action with theses steps
  - build
  - lint
  - unit test
  - e2e test
  - publish version
- [x] Labeller that adds the right label on each project
