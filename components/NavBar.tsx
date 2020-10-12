import React, { FC } from 'react'
import {
  Box,
  Stack,
  Link as _Link,
  IconButton,
  useColorMode,
} from '@chakra-ui/core'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'

interface NavLink {
  url: string
  title: string
}

const LINKS: NavLink[] = []

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const themeSwitcherButtonNode = () => {
    if (colorMode === 'light') {
      return (
        <IconButton
          aria-label="Switch to dark theme"
          title="Switch to dark theme"
          icon={<MoonIcon />}
          size="sm"
          onClick={toggleColorMode}
        />
      )
    }

    return (
      <IconButton
        aria-label="Switch to light theme"
        title="Switch to light theme"
        icon={<SunIcon />}
        size="sm"
        onClick={toggleColorMode}
      />
    )
  }

  const desktopMenuNode = () => {
    return (
      <Stack isInline spacing={4} alignItems="center">
        {[
          LINKS.map((link: NavLink) => {
            return (
              <Box key={link.url}>
                <Link href={link.url}>
                  <_Link p={4} href={link.url} rounded="md">
                    {link.title}
                  </_Link>
                </Link>
              </Box>
            )
          }),
        ]}
        <Box px={2}>{themeSwitcherButtonNode()}</Box>
      </Stack>
    )
  }

  return (
    <Box
      id="header-container"
      as="header"
      position="fixed"
      right={4}
      top={0}
      zIndex={10}
      fontWeight="bold"
    >
      <Stack
        id="header-stack"
        isInline
        py={4}
        alignItems="center"
        justifyContent="flex-end"
        textAlign="center"
      >
        <Box id="toggle-color-btn" display={['none', 'none', 'none', 'block']}>
          {desktopMenuNode()}
        </Box>
        <Box display={['block', 'block', 'block', 'none']} px={4}>
          {desktopMenuNode()}
        </Box>
      </Stack>
    </Box>
  )
}

export default Navbar
