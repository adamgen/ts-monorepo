# Vista point tiny monorepo

A tiny monorepo for vista point's interfaces and back and front end code bases.

## installation

- Install yarn globally if not installed `npm i -g yarn`
- Install global cli packages `yarn global add @nestjs/cli @angular/cli`

## [lerna](https://github.com/lerna/lerna)

- Install lerna globally `yarn global add lerna`
- Run `lerna run test` to run `npm run test` in all folders under `/packages`. [More info on the `run` command](https://github.com/lerna/lerna/tree/master/commands/run#readme)
- Bump version (aka patch) across all modified packages `lerna version patch`. [More info on the `version` command](https://github.com/lerna/lerna/tree/master/commands/version#readme)
