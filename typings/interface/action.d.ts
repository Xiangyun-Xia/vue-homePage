/**
 * Action interface
 */

import { CommitOptions, ActionContext } from 'vuex'

export namespace Action {
  interface Option {
    type: string
    payload?: any
    api?: string
    params?: any
    success: string
    failure: string,
    headers?: any,
    options?: CommitOptions
  }

  interface Context<S> extends ActionContext<S, Types.State.RootState> {
    state: S
  }
}