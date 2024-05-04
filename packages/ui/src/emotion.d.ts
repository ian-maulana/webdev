import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string,
      white: string,
    },
    size: {
      s5: string,
      s10: string,
      s16: string,
    },
    radius: {
      r16: string,
    },
    fontSize: {
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
    },
    fontWeight: {
      normal: number,
      medium: number,
      semiBold: number,
      bold: number,
    },
  }
}