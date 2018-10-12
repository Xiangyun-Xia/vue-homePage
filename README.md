# vue-ts-page

> vue with typescript project

## Build Setup

> 参考： [vue + typescript 项目起手式](https://segmentfault.com/a/1190000011744210)

#### 升级yarn

- `brew upgrade yarn`

#### 升级vue和vue-cli

- `yarn global upgrade vue`

#### 使用vue-cli搭建项目

- `vue init webpack <project>`

#### 安装依赖

- `cd <project>`
- `yarn add vue-class-component vue-property-decorator`
- `yarn add ts-loader typescript tslint tslint-loader tslint-config-standard`

#### 配置webpack

- 找到`entry.app` 将`main.js` 改成 `main.ts`, 顺便把项目文件中的`main.js`也改成`main.ts`, 里面内容保持不变

- 找到`resolve.extensions` 里面加上`.ts` 后缀 （是为了之后引入.ts的时候不写后缀）

  ```javascript
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts'],
      alias: {
        '@': resolve('src')
      }
    }
  ```

- 找到`module.rules` 添加webpack对`.ts`的解析

  ```javascript
    module: {
      rules: [
        ...(config.dev.useEslint ? [createLintingRule()] : []),
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: vueLoaderConfig
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
        },
    // ===== 以下 =====
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          enforce: 'pre',
          loader: 'tslint-loader'
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
    // ===== 以上 =====
      ]
    }
  ```

#### 添加tsconfig.json

```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "outDir": "./dist/",
    "sourceMap": true,
    "strict": true,
    "module": "esnext",
    "target": "esnext",
    "moduleResolution": "node",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "allowJs": true,
    "alwaysStrict": true,
    "jsx": "react",
    "baseUrl": "./",
    "paths": {
      "src/*": ["src/*"]
    },
    "lib": ["dom", "es5", "es6", "es7", "es2015.promise"],
    "typeRoots": ["node_modules/@types", "typings"]
  },
  "include": ["src/**/*.ts", "src/**/*.vue", "typings/**/*.ts"],
  "exclude": ["node_modules", "./dist"]
}
```

#### 添加tslint.json

```json
{
  "extends": "tslint-config-standard",
  "globals": {
    "require": true
  }
}
```

#### 添加.vue识别

由于 `TypeScript` 默认并不支持 `*.vue` 后缀的文件，所以在 `vue` 项目中引入的时候需要创建一个 `vue-shim.d.ts` 文件，放在项目项目对应使用目录下，例如 `src/vue-shim.d.ts`，意思是告诉 `TypeScript` `*.vue` 后缀的文件可以交给 `vue` 模块来处理。

```javascript
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
```

#### 修改目录结构

略

#### 改造vue文件

略