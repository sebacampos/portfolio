import { NextPage } from 'next'
import Head from 'next/head'
import siteConfig from 'config/site'
import ParticlesHero from 'components/ParticlesHero'
import NavBar from 'components/NavBar'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`${siteConfig.details.title} | ${siteConfig.details.tagLine}`}</title>
      </Head>
      <NavBar />
      <ParticlesHero />
    </>
  )
}

export default IndexPage
