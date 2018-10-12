import * as webpack from 'webpack'
import * as webpackMerge from 'webpack-merge'

import webpackConfig from './webpack.config'
import { hotModuleReplacement } from './webpack.plugins'

const config: webpack.Configuration = webpackMerge(webpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [hotModuleReplacement],
  devServer: {
    hot: true
  }
})

export default config
