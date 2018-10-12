export namespace Getters {
  namespace User {
    interface getTerm {
      (id?: string): Types.Term | void
    }
    interface getKlass {
      (termID?: string, id?: string): Types.Klass | void
    }
    interface getSubject {
      (termID?: string, klassID?: string, id?: string): Types.Subject | void
    }
  }

  interface User {
    term(id?: string): Types.Term
    klass(termID?: string, id?: string): Types.Klass
    subject(termID?: string, klassID?: string, id?: string): Types.Subject
  }

  namespace Question {
    interface item {
      (id: number | string): Types.Question
    }
    interface list {
      (): Types.Question
    }
    interface ids {
      (): Array<number|string>
    }
  }

  interface Question {
    item(id: number | string): Types.Question
    list(): Types.Question[]
    ids(): Array<number|string>
  }

  namespace Knowledge {
    interface item {
      (id: number | string): Types.Knowledge
    }
  }

  interface Knowledge {
    item(id: number | string): Types.Knowledge
  }

  namespace Examination {
    interface getInfo {
      (examSubjectID: number): any
    }
  }

  interface Examination {
    info(examSubjectID: number): any
  }
}