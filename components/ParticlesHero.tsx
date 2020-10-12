import React, { FC } from 'react'
import Particles, { IParticlesParams } from 'react-tsparticles'
import styled from 'styled-components'
import { Box, theme, useColorMode } from '@chakra-ui/core'
import Hero from 'components/Hero'

const HeroContainer = styled.div`
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  animation: fadein 2s;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const ParticlesHero: FC = () => {
  const { colorMode } = useColorMode()

  const particlesColor = {
    light: theme.colors.black,
    dark: theme.colors.teal[500],
  }

  const particleParams: IParticlesParams = {
    fpsLimit: 60,
    detectRetina: true,
    pauseOnBlur: true,
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: particlesColor[colorMode],
      },
      shape: {
        type: 'polygon',
        stroke: {
          width: 0,
          color: '#FF0000',
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 19.18081918081918,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: particlesColor[colorMode],
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: false,
          mode: 'bubble',
        },
        onclick: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 100,
          size: 10,
          duration: 2,
          opacity: 8,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
        trail: {
          delay: 0.2,
          quantity: 0.05,
        },
      },
    },
    retina_detect: true,
  }

  const particleStyle = {
    width: '100% !important',
    height: '100vh !important',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: -2,
  }

  return (
    <HeroContainer id="heroContainer">
      <Particles
        id="ts-particles"
        params={particleParams}
        style={particleStyle}
      />
      <Hero />
      <Box
        bottom={0}
        alignSelf="center"
        aria-disabled
        _disabled={{ opacity: 0.6 }}
      >
        Portfolio under construction
      </Box>
    </HeroContainer>
  )
}

export default ParticlesHero
