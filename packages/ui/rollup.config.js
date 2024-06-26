import Ts from 'rollup-plugin-typescript2';

export default {
  input: [
    'src/index.ts',
    'src/Badge/index.ts',
    'src/Visible/index.ts',
    'src/Card/index.ts',
    'src/Status/index.ts',
    'src/Divider/index.ts',
    'src/FormGroup/index.ts',
    'src/ContainedButton/index.ts',
    'src/OutlinedButton/index.ts',
    'src/TextButton/index.ts',
    'src/Dialog/index.ts',
  ],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [Ts()],
  external: ['react', '@emotion/react', '@emotion/styled'],
};
