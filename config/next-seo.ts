import siteConfig from 'config/site'

export default {
  title: `${siteConfig.details.title} - ${siteConfig.details.tagLine}`, // max: 65
  description: siteConfig.details.description, // max:155
  // canonical: siteConfig.details.url,
  twitter: {
    handle: siteConfig.socialLinks.twitter,
    site: siteConfig.socialLinks.twitter,
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    site_name: siteConfig.details.title,
    url: siteConfig.details.url,
    title: siteConfig.details.title, // max 35
    description: siteConfig.details.description, // max 65
    images: [
      {
        url: `${siteConfig.details.url}${siteConfig.assets.avatar}`,
        width: 800,
        height: 600,
        alt: siteConfig.details.title,
      },
    ],
  },
}
