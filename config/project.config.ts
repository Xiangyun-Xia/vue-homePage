import * as path from 'path'

interface IConfig {
  publicPath: string,
  distPath: string,
  staticPath: string,
  srcPath: string,
  devMode: boolean,
  env: {
    API: {
      [key: string]: any
    },
    DEPLOY: string
  }
}

const config: IConfig = {
  publicPath: '/',
  srcPath: path.resolve(__dirname, '../src'),
  staticPath: path.resolve(__dirname, '../static'),
  distPath: path.resolve(__dirname, '../dist'),
  devMode: process.env.NODE_ENV !== 'production',
  env: {
    API: {
      TRAINING: '',
      ORIGINS: {}
    },
    DEPLOY: `"${process.env.DEPLOY_ENV}"`
  }
}

switch (process.env.DEPLOY_ENV) {
  case 'dev':
    {
      config.env.API.ORIGINS.home = '"http://www.baidu.com"'
    }
    break
  default:
    {
      config.env.API.ORIGINS.home = '"http://www.baidu.com"'
    }
    break
}

export default config
