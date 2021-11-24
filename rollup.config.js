import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from "./package.json";
import typescript from 'rollup-plugin-typescript2';

// Excluded dependencies
const EXTERNAL = Object.keys(pkg.devDependencies);

export default {
  input: ["src/index.tsx"],
  output: {
    dir: "dist",
    sourcemap: true,
    format: "esm",
    exports: "named",
    preserveModules: true,
    preserveModulesRoot: "src"
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript()
  ],
  external: EXTERNAL
};
