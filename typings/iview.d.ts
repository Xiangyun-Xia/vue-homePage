import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $spin: {
      show(): void
      hide(): void
    }
    $loading: {
      start(): void
      finish(): void
      error(): void
      update(percent: number): void
    }
    $scrollTop(...args: any[]): void
    $cookie: {
      install(name: string, options?: any): void
      delete(name: string, options?: any): void
      set(name: string, value: any, daysOrOptions?: any): void
      get(name: string): any
    }
    $message: {
      success (config?: any): void
      error (config?: any): void
    }

    $download (url: string): void

    $date: {
      format (date: Date, format?: string): string
    }

    $XY: {
      origins: {
        home: string
      }
    }
  }
}