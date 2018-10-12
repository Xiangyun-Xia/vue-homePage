import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

type AjaxResponse = Types.Ajax.Response
type ActionContext = Types.Action.Context<Types.State.ModuleState>
type ActionOption = Types.Action.Option

export default (context: ActionContext, option: ActionOption): Promise<any> => {

  // 同步 action
  context.commit(option.type, option.payload, option.options)

  return new Promise((resolve, reject) => {

    // 同步 action
    if (typeof option.api === 'undefined') {
      return resolve({ success: true })
    }

    // 异步 action
    const [method, url] = option.api.split(' ')
    const config: AxiosRequestConfig = {url, method, withCredentials: DEPLOY !== 'local' }
    config.headers = Object.assign({ 'X-Requested-With': 'XMLHttpRequest' }, option.headers)

    if (/(get)/.test(method)) {
      config.params = option.params
    } else if (/(post|put|delete)/.test(method)) {
      config.data = option.params
    }

    const { success, failure, params, payload } = option

    return axios.request(config).then((axiosRespose: AxiosResponse) => {
      const ajaxResponse: AjaxResponse = axiosRespose.data
      if (ajaxResponse.status === true || ajaxResponse.errcode === '0') {
        context.commit(success, { response: ajaxResponse, params, payload })
        resolve(ajaxResponse)
      } else {
        context.commit(failure, { response: ajaxResponse, params, payload, error: new Error(ajaxResponse.errmsg) } )
        // TODO: 这里可以尝试使用 throw
        reject(ajaxResponse)
      }
    }).catch((axiosError: AxiosError) => {
      console.log('axios.catch')
      const response: AxiosResponse = axiosError.response as AxiosResponse
      const ajaxResponse: AjaxResponse = { errcode: '', errmsg: '', status: false, result: null }
      let error = null

      if (axiosError.message === 'Network Error') {
        ajaxResponse.errmsg = axiosError.message
        error = new Error(axiosError.message)
      } else if (response && response.status) {
        switch (response.status) {
          case 401:
            {
              ajaxResponse.errmsg = '账户未授权'
              error = new Error('账户未授权')
              context.commit('session/UNAUTHORIZED', { loginUrl: response.data.loginUrl }, { root: true })
            }
            break
          default:
            console.error(response)
            error = new Error('未知错误')
            break
        }
      } else {
        console.error(axiosError)
      }
      context.commit(failure, { response: ajaxResponse, params, payload, error } )
    })
  }).then((response) => response).catch((error) => error)
}
