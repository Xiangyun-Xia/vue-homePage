import * as cleanWebpackPlugin from 'clean-webpack-plugin'
import * as copyWebpackPlugin from 'copy-webpack-plugin'
import * as forkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import * as htmlWebpackPlugin from 'html-webpack-plugin'
import * as miniCssExtractPlugin from 'mini-css-extract-plugin'
import * as optimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin'
import { VueLoaderPlugin as vueLoaderPlugin } from 'vue-loader'
import * as webpack from 'webpack'
import * as manifestPlugin from 'webpack-manifest-plugin'

import projectConfig from './project.config'

// CleanWebpackPlugin 路径
const cleanPath: string[] = [projectConfig.distPath]

// CleanWebpackPlugin 选项
const cleanOptions: object = { allowExternal: true }

export const clean = new cleanWebpackPlugin(cleanPath, cleanOptions)

export const manifest = new manifestPlugin()

export const miniCssExtract = new miniCssExtractPlugin({
  filename: projectConfig.devMode ? 'styles/[name].css' : 'styles/[name].[contenthash].css'
})

export const html = (options: object) => {
  return new htmlWebpackPlugin(options)
}

export const copy = new copyWebpackPlugin([
  { from: projectConfig.staticPath, to: projectConfig.distPath, ignore: ['.*'] }
])

export const optimizeCssAssets = new optimizeCssAssetsWebpackPlugin({
  assetNameRegExp: /\.css$/g,
  cssProcessor: require('cssnano'),
  cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
  canPrint: true
})

export const vue = new vueLoaderPlugin()

export const forkTsChecker = new forkTsCheckerWebpackPlugin({
  tslint: true,
  vue: true
})

export const hotModuleReplacement = new webpack.HotModuleReplacementPlugin()

export const define = new webpack.DefinePlugin(projectConfig.env)

export const namedModules = new webpack.NamedModulesPlugin()

export const hashedModuleIds = new webpack.HashedModuleIdsPlugin({})
