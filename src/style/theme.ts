export const theme = {
  colors: {
    primary: '#fcc33a',
    secondary: '#78a9ff',
    text: '#28282c',
    textInverse: '#f0f0f0'
  },
  //in rem, not pixels
  fontSizes: {
    sm: 0.8,
    md: 1,
    mx: 1.2,
    lg: 1.6,
    xl: 2.2
  },
  textVariants: {
    h1: {
      fontSize: 'xl',
      lineHeight: 1.8
    },
    h2: {
      fontSize: 'lg',
      lineHeight: 1.8
    },
    h3: {
      fontSize: 'lg',
      lineHeight: 1.6
    },
    h4: {
      fontSize: 'lg',
      lineHeight: 1.6
    },
    h5: {
      fontSize: 'lg',
      lineHeight: 1.6
    },
    h6: {
      fontSize: 'lg',
      lineHeight: 1.6
    },
    p: {
      fontSize: 'md',
      lineHeight: 1.4
    },
    span: {
      fontSize: 'inherit',
      lineHeight: 'inherit'
    }
  },
  radii: [4, 8, 12, 20, 50, 100],
  spacings: { sm: 8, md: 16, lg: 32, xl: 42 },
  sizes: { sm: 20, md: 34, lg: 48 },
  containers: {
    content: 1260
  }
} as const

export type AppTheme = typeof theme
export type ThemeColor = keyof AppTheme['colors']
export type FontSize = keyof AppTheme['fontSizes']
export type Size = keyof AppTheme['sizes']

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
