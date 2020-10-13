import React from 'react'
import Head from 'next/head'
import SEO from 'config/next-seo'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import App, { NextWebVitalsMetric } from 'next/app'
import * as gtag from 'lib/gtag'
import Router from 'next/router'

const Layout = dynamic(
  import(/* webpackChunkName: "Layouts" */ 'components/Layout'),
)
const isProd = process.env.NODE_ENV === 'production'

declare global {
  interface Window {
    gtag: any
  }
}

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  if (isProd && window.gtag) {
    window.gtag('send', 'event', {
      eventCategory:
        label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      eventAction: name,
      eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
      eventLabel: id, // id unique to current page load
      nonInteraction: true, // avoids affecting bounce rate.
    })
  }
}

export default class MyApp extends App {
  componentDidMount() {
    if (isProd) {
      console.log(
        '%c%s',
        'color: green; background: white; font-size: 24px;',
        'Welcome stalker! 😄',
      )
      const handleRouteChange = (url: string) => {
        gtag.pageview(url)
      }

      Router.events.on('routeChangeComplete', handleRouteChange)

      return () => {
        Router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏄‍♂️</text></svg>"
          />
        </Head>
        <NextSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    )
  }
}
