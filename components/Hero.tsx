import React, { FC } from 'react'
import {
  Box,
  Stack,
  Image,
  Heading,
  Text,
  useColorMode,
  Link,
} from '@chakra-ui/core'
import siteConfig from 'config/site'
import TextLoop from 'react-text-loop'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io'

const Hero: FC = () => {
  const { colorMode } = useColorMode()
  const sectionColor = { light: 'gray.900', dark: 'white' }

  return (
    <Stack
      spacing={2}
      height="calc(100vh)"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color={sectionColor[colorMode]}
      zIndex={1}
    >
      <Box>
        <Stack alignItems="center" py={4}>
          <Link
            href={siteConfig.social.linkedin}
            isExternal
            rounded="full"
            _hover={{
              cursor: 'pointer',
              transform: 'scale(.9)',
              transition: 'all 150ms ease-in-out',
              opacity: 0.7,
            }}
          >
            <Image
              shadow="xl"
              rounded="full"
              boxSize="xs"
              htmlWidth="728px"
              htmlHeight="728px"
              objectFit="cover"
              border="solid 2px"
              borderColor={sectionColor[colorMode]}
              src={siteConfig.assets.avatar}
              alt={siteConfig.details.title}
              className="avatar"
              loading="lazy"
            />
          </Link>
        </Stack>
        <Heading
          as="h1"
          fontSize={['2rem', '3rem', '4rem', '5rem']}
          fontFamily="body"
        >
          {siteConfig.details.title}
        </Heading>
      </Box>
      <Box py={2}>
        <Heading
          as="h2"
          fontSize={['1rem', '1.5rem', '2rem', '2.5rem']}
          fontFamily="body"
        >
          <TextLoop
            fade={true}
            interval={3000}
            delay={4000}
            adjustingSpeed={500}
            mask={true}
            noWrap={true}
          >
            <Text>{siteConfig.details.tagLine}</Text>
            <Text> Bachelor of Software Information Systems</Text>
            <Text> Software Developer</Text>
            <Text> Entrepreneur</Text>
            <Text> Surfer</Text>
            <Text> Wanderlust</Text>
          </TextLoop>
        </Heading>
      </Box>
      <Stack direction="row" spacing={2} py={2}>
        <Link
          title="Github"
          href={siteConfig.social.github}
          isExternal
          _hover={{
            color: '#AD5C51',
          }}
        >
          <Box as={IoLogoGithub} size="2.5rem" />
        </Link>

        <Link
          title="Youtube"
          href={siteConfig.social.youtube}
          isExternal
          _hover={{ color: 'red.500', stroke: 'white' }}
        >
          <Box as={IoLogoYoutube} size="2.5rem" color="currentColor" />
        </Link>

        <Link
          title="Twitter"
          href={siteConfig.social.twitter}
          isExternal
          _hover={{ color: '#1da1f2', stroke: 'white' }}
        >
          <Box as={IoLogoTwitter} size="2.5rem" color="currentColor" />
        </Link>

        <Link
          title="LinkedIn"
          href={siteConfig.social.linkedin}
          isExternal
          _hover={{ color: '#0077b5', stroke: '#0077b5' }}
        >
          <Box as={IoLogoLinkedin} size="2.5rem" color="currentColor" />
        </Link>
      </Stack>
      <Box pt={4}>
        <Text alignSelf="center">Wanna know more about me?</Text>
        <Text alignSelf="center">
          Check my{' '}
          <Link
            href={siteConfig.social.youtube}
            isExternal
            textDecoration="underline"
            _hover={{
              color: 'red.500',
              stroke: 'white',
            }}
          >
            Youtube Video!
          </Link>
        </Text>
      </Box>
    </Stack>
  )
}

export default Hero
