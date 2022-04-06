import typescript from '@rollup/plugin-typescript';

// Peer deps expected to be installed in the consuming app.
const external = [
  'react',
  '@vertexvis/viewer',
  '@vertexvis/viewer-react',
  '@vertexvis/viewer/loader',
];

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [typescript()],
  external,
};
