import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { rollup } from 'rollup';

rollup({
  input: {
  },
  output: {
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript(),
  ]
})

