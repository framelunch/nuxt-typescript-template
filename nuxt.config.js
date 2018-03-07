const parseArgs = require('minimist');
const postcssImport = require('postcss-import');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');
const postcssNested = require('postcss-nested');
const postcssColorHexAlpha = require('postcss-color-hex-alpha');
const postcssFixes = require('postcss-fixes');
const postcssUrl = require('postcss-url');
const autoprefixer = require('autoprefixer');

const argv = parseArgs(process.argv.slice(2), {
  alias: { H: 'hostname', p: 'port' },
  string: ['H'],
  unknown: parameter => false,
});
const port = argv.port || process.env.PORT || process.env.npm_package_config_nuxt_port || '3000';
const host = argv.hostname || process.env.HOST || process.env.npm_package_config_nuxt_host || 'localhost';
const postcss = [
  postcssImport(),
  postcssCustomProperties(),
  postcssCustomMedia(),
  postcssNested(),
  postcssColorHexAlpha(),
  postcssFixes(),
  postcssUrl(),
  autoprefixer(),
];

module.exports = {
  srcDir: 'src/',
  env: {
    baseUrl: process.env.BASE_URL || `http://${host}:${port}`,
  },
  head: {
    title: 'tt1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   * generate command configration
   */
  generate: {
    routes: ['/members/1', '/members/2', '/members/3'],
  },
  /*
  ** Build configuration
  */
  css: ['~/assets/css/main.css'],
  build: { postcss },
  modules: ['@nuxtjs/axios', '~~/modules/typescript.js'],
  axios: {},
};
