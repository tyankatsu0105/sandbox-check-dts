import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: './dist',
      format: 'esm',
      entryFileNames: 'esm.js',
    },
    {
      dir: './dist',
      format: 'cjs',
      entryFileNames: 'common.js',
    }
  ],
  plugins: [
    typescript(),
    terser()
  ]
};