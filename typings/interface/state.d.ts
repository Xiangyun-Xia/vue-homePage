/**
 * State interface
 */
import { ActionContext } from 'vuex'

export namespace State {
  // root state
  interface RootState extends Types.PlainObject {}

  // module state
  interface ModuleState extends Types.PlainObject {}
}