declare module "*.json"

declare module 'iview'

declare module 'vue-cookie'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare namespace API {
  const ORIGINS: any
}

declare const DEPLOY: string