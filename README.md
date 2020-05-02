# Monorepo Typescript Template

---

[![build and test](https://github.com/JulienKode/monorepo-typescript-template/workflows/Master%20CI/badge.svg)](https://github.com/JulienKode/monorepo-typescript-template/actions)
[![GitHub issues](https://img.shields.io/github/issues/JulienKode/monorepo-typescript-template?style=flat-square)](https://github.com/JulienKode/monorepo-typescript-template/issues)
[![GitHub forks](https://img.shields.io/github/forks/JulienKode/monorepo-typescript-template?style=flat-square)](https://github.com/JulienKode/monorepo-typescript-template/network)
[![GitHub stars](https://img.shields.io/github/stars/JulienKode/monorepo-typescript-template?style=flat-square)](https://github.com/JulienKode/monorepo-typescript-template/stargazers)
[![GitHub license](https://img.shields.io/github/license/JulienKode/monorepo-typescript-template?style=flat-square)](https://github.com/JulienKode/monorepo-typescript-template/blob/master/LICENSE)
[![Watch on GitHub](https://img.shields.io/github/watchers/JulienKode/monorepo-typescript-template.svg?style=social)](https://github.com/JulienKode/monorepo-typescript-template/watchers)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/JulienKode/monorepo-typescript-template.svg?style=social)](https://twitter.com/intent/tweet?text=Checkout%20this%20library%20https%3A%2F%2Fgithub.com%2FJulienKode%2Fmonorepo-typescript-template)

---

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
