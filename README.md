# Vertex Web SDK Shared Viewer Library Example

This project demonstrates how to build a Web SDK Viewer library that you can
distribute between different applications. It's structured as a monorepo managed
by [Lerna].

It uses [Rollup] for bundling the shared viewer library and [NextJS] as the
application consuming the library. Lerna is used to manage the monorepo

## Structure

```
./packages
  ./app         # The NextJS app that consumes the shared library
  ./viewer-lib  # The shared viewer library bundled with Rollup
```

The viewer lib treats the Web SDK and React as peer dependencies. You should run
`yarn add @vertexvis/viewer-react react react-dom` in consuming applications.

## Installation

```bash
$ yarn install
```

or

```bash
$ npm i
```

**Note:** This project only maintains a lock file for Yarn. Using NPM may
install newer dependencies that have not been tested.

## Running

Run `yarn dev` to spin up NextJS's local dev server and run Rollup for
the shared library in watch mode. Once started, open http://localhost:3000 to
view the app.

[Lerna]: https://lerna.js.org/
[Rollup]: https://rollupjs.org/
[NextJS]: https://nextjs.org/
