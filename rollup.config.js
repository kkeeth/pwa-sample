import riot from "rollup-plugin-riot";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "postcss";
import postcssCssnext from "postcss-cssnext";

export default {
  input: "src/main.js",
  output: {
    file: "public/bundle.js",
    format: "iife",
  },
  plugins: [
    riot({
      style: "cssnext",
      parsers: {
        css: { cssnext },
      },
    }),
    nodeResolve({ jsnext: true }),
    commonjs(),
  ],
};

/**
 * Transforms new CSS specs into more compatible CSS
 */
function cssnext(tagName, css) {
  // A small hack: it passes :scope as :root to PostCSS.
  // This make it easy to use css variables inside tags.
  css = css.replace(/:host/g, ":root");
  css = postcss([postcssCssnext]).process(css).css;
  css = css.replace(/:root/g, ":host");
  return css;
}
