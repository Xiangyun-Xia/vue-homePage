import * as miniCssExtractPlugin from 'mini-css-extract-plugin'
import * as path from 'path'
import * as webpack from 'webpack'

import projectConfig from './project.config'

export const pre = {
  enforce: 'pre',
  test: /\.tsx?$/,
  loader: 'tslint-loader',
  options: {},
  include: [projectConfig.srcPath],
  exclude: /node_modules/
}

export const ts: webpack.Rule = {
  test: /\.tsx?$/,
  use: [
    { loader: 'babel-loader' },
    { loader: 'ts-loader', options: { transpileOnly: true, appendTsSuffixTo: [/\.vue$/] } }
  ],
  exclude: /node_modules/
}

export const vue = {
  test: /\.vue$/,
  use: [
    { loader: 'vue-loader', options: { loaders: { ts: { loader: 'ts-loader!tslint-loader' } } } },
    { loader: 'iview-loader', options: { prefix: false } }
  ]
}

export const style = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    projectConfig.devMode ? { loader: 'vue-style-loader' } : miniCssExtractPlugin.loader,
    { loader: 'css-loader', options: { importLoaders: 1 } },
    { loader: 'sass-loader', options: { indentedSyntax: false, outputStyle: 'compressed' } },
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          path.resolve(__dirname, '../src/styles/vars.scss'),
          path.resolve(__dirname, '../src/styles/mixins.scss'),
          path.resolve(__dirname, '../node_modules/bourbon/core/_bourbon.scss')
        ]
      }
    }
  ]
}

export const less = {
  test: /\.less$/,
  use: [
    projectConfig.devMode ? { loader: 'vue-style-loader' } : miniCssExtractPlugin.loader,
    { loader: 'css-loader', options: { importLoaders: 1 } },
    { loader: 'less-loader', options: { javascriptEnabled: true } }
  ]
}

export const image = {
  test: /\.(png|svg|jpg|gif)$/,
  loader: 'file-loader',
  options: {
    limit: 10000,
    name: 'static/img/[name].[hash:7].[ext]'
  }
}

export const font = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  loader: 'file-loader',
  options: {
    limit: 10000,
    name: 'static/fonts/[name].[hash:7].[ext]'
  }
}
