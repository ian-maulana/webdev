import Ts from 'rollup-plugin-typescript2';

export default {
  input: ['src/index.ts', 'src/Hello/index.ts', 'src/Visible/index.ts'],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [Ts()],
  external: ['react', '@emotion/react', '@emotion/styled'],
};
