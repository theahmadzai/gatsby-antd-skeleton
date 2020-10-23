const path = require('path')
const lessToJson = require('less-to-json')
const { siteMetadata, manifest } = require('./config')
require('dotenv').config({ path: '.env' })

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: manifest,
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: lessToJson('src/styles/vars.less'),
        },
      },
    },
    'gatsby-plugin-minify-classnames',
    'gatsby-plugin-offline',
  ],
}
