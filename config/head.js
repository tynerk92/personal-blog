export default {
  title: process.env.npm_package_name || '',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  script: [
    {
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      defer: true,
      id: 'netlify-identity-widget-script'
    },
    {
      src:
        'https://chimpstatic.com/mcjs-connected/js/users/91ed523fa0056209381275c57/bba8fad950ce060f6ba733791.js',
      async: true
    },
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-LPRF9TSRT8',
      async: true
    },
    {
      src: 'googleAnalytics.js',
      id: 'google-analytics'
    }
  ]
}
