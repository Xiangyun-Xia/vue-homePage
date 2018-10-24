import * as path from 'path'
import * as webpack from 'webpack'

import projectConfig from './project.config'
import { clean, copy, define, forkTsChecker, html, manifest, miniCssExtract, optimizeCssAssets, vue as vuePlugin } from './webpack.plugins'
import { font, image, less, style, ts, vue } from './webpack.rules'

const indexHtml = html({
  filename: 'index.html',
  template: path.resolve(__dirname, '../src/index.html'),
  favicon: path.resolve(__dirname, '../static/favicon.ico'),
  chunks: ['manifest', 'vendors', 'index']
})

const config: webpack.Configuration = {
  context: path.resolve(__dirname, '..'),
  mode: 'none', // "production" | "development" | "none"
  devtool: false,
  entry: {
    index: path.resolve(__dirname, '../src/index')
  },
  output: {
    path: projectConfig.distPath,
    filename: 'scripts/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.vue', '.tsx', '.ts', '.js', '.json'],
    alias: {
      'src': projectConfig.srcPath,
      'vue': path.resolve(__dirname, '../node_modules/vue'),
      'vue-property-decorator': path.resolve(__dirname, '../node_modules/vue-property-decorator')
    }
  },
  module: {
    rules: [vue, ts, less, style, image, font]
  },
  plugins: [vuePlugin, clean, copy, define, miniCssExtract, indexHtml, manifest, optimizeCssAssets, forkTsChecker],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      name: true,
      cacheGroups: {
        vendors: {
          test: (module) => {
            return module.resource
              && /\.js$/.test(module.resource)
              && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
          },
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devServer: {
    publicPath: '/',
    contentBase: projectConfig.distPath,
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    headers: {},
    host: '0.0.0.0',
    port: 8102
  }
}

export default config
