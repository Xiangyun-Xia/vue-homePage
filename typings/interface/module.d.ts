export namespace Module {
  namespace User {
    interface State {
      fetching: boolean
      error: any
    }

    namespace Getters {
      interface routeParams {
        termID: string
        classID: number
        subjectID: number
        examSubjectID: number
      }
    }
  }
}