/**
 * Ajax interface
 */

export namespace Ajax {
  interface Response {
    errcode: string
    errmsg: string
    status: boolean
    result: any[] | object | any,
    totalCounts?: number
  }

  interface Success {
    response: Response
    params: any,
    payload: any
  }

  interface Failure extends Success {
    error: Error
  }
}