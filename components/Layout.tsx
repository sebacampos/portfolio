import React, { FC } from 'react'
import { ChakraProvider, theme, Box } from '@chakra-ui/core'

const Layout: FC = ({ children }: any) => {
  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
    },
    fonts: {
      ...theme.fonts,
      heading: "'Noto Serif', serif",
      body: "'Inter', sans-serif",
      mono: 'Menlo, Monaco, Consolas, Courier New, monospace',
    },
  }

  return (
    <ChakraProvider theme={customTheme}>
      <Box minH="100vh">{children}</Box>
    </ChakraProvider>
  )
}

export default Layout
