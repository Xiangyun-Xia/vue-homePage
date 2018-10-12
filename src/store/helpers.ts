import isFunction from 'lodash/isFunction'
import Vue from 'vue'

export const applyState = (target: any, ...args: any[]) => {
  const state = args.reduce((states, arg) => Object.assign(states, arg), {})
  Object.keys(state).map((key) => Vue.set(target, key, state[key]))
}

export const applySet = (...args: any[]) => {
  Vue.set.apply(Vue, args)
}

export const convertToKeysValues = (list: any[] = [], key: string = 'id', callback?: any) => {
  return list.reduce((accumulator, item, index) => {
    const value = item[key]

    if (isFunction(callback)) {
      callback(item, index)
    }
    accumulator.keys.push(value)
    accumulator.values[`${value}`] = item
    return accumulator
  }, { keys: [], values: {} })
}

export default {}
