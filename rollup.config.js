import typescript from "rollup-plugin-typescript2";
import resolve from '@rollup/plugin-node-resolve'
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: './src/main.ts',
  output: {
    file: './dist/main.js',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs()
  ]
}