import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import minifyPlugin from '@rspack/plugin-minify'

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      optimization: {
        minimize: true,
        minimizer: [
          new minifyPlugin({
            minifier: 'terser',
          }),
        ],
      },
    },
  },
});
