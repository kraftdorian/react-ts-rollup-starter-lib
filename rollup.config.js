import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from "./package.json";

// Array of extensions to be handled by babel
const EXTENSIONS = [".ts", ".tsx"];

// Excluded dependencies
const EXTERNAL = Object.keys(pkg.devDependencies);

export default {
  input: ["src/index.tsx"],
  output: {
    dir: "dist",
    sourcemap: true,
    format: "esm",
    preserveModules: true
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      extensions: EXTENSIONS,
      babelHelpers: "inline",
      include: EXTENSIONS.map(ext => `src/**/*${ext}`)
    })
  ],
  external: EXTERNAL
};
