import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string,
      success: string,
      warning: string,
      critical: string,
      secondary: string,
      info: string,
      white: string,
      border: string,
    },
    size: {
      s5: string,
      s10: string,
      s16: string,
    },
    radius: {
      r5: string,
      r10: string,
      r16: string,
      r24: string
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