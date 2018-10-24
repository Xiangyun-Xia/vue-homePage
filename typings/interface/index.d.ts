/**
 * project type declaration
 */

export as namespace Types

export * from './module'

export * from './state'

// export * from './getters'

export * from './ajax'

export * from './action'

export interface PlainObject {
  [key: string]: any
}

export interface PlainSet<T> extends PlainObject {
  keys: Array<number|string>
  values: {
    [key: string]: T
  }
}