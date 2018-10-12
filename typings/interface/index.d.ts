/**
 * project type declaration
 */

export as namespace Types

export * from './module'

export * from './state'

export * from './getters'

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

export interface Subject {
  subjectID: number
  subjectName: string
  subjectCode: string
  examSubjectID: number
  examDate: string
  examName: string
}

export interface Klass {
  classID: number
  gradeID: number
  classFullName: string
  subjectIds: string[]
}

export interface Grade {
  gradeID: number
  gradeName?: string
  subject: PlainSet<Subject>
}

export interface Term {
  term: string
  termName: string
  klassIds: string[]
}

export interface Question {
  id: number
}

export interface Knowledge {
  // 知识点 id
  knowledgeID: number
  // 知识点名称
  knowledgeName: string
  classScoreRate: string
  classScoreRateValue: number
  counts: number
  errorStudentNum: number
  gradeScoreRate: string
  gradeScoreRateValue: number
  questionCounts: number
  scoreRateDifference: string
  scoreRateDifferenceValue: number
  [key: string]: any
}

export interface Examination {
  createDate: number
  examID: number
  examName: string
  examSubjectID: number
  gradeName: string
  subjectName: string
}