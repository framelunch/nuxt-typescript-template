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
  unknown: _parameter => false,
});
const port = argv.port || process.env.PORT || process.env.npm_package_config_nuxt_port || '3000';
const host = argv.hostname || process.env.HOST || process.env.npm_package_config_nuxt_host || 'localhost';
const baseUrl = process.env.BASE_URL || `http://${host}:${port}`;
const postcss = [
  postcssImport(),
  postcssCustomProperties({ preserve: false }),
  // postcssCustomProperties({ preserve: 'preserve-computed' }),
  postcssCustomMedia(),
  postcssNested(),
  postcssColorHexAlpha(),
  postcssFixes(),
  postcssUrl(),
  autoprefixer(),
];
const routes = ['/members/1', '/members/2', '/members/3'];

module.exports = {
  srcDir: 'src/',
  env: { baseUrl },
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
  generate: { routes },
  /*
   * sitemap configuration
   */
  sitemap: {
    path: '/sitemap.xml',
    hostname: baseUrl,
    cacheTime: 1000 * 60 * 15,
    generate: true, // Enable me when using nuxt generate
    exclude: ['/members/show', '/members/edit'],
    routes,
  },
  /*
  ** Build configuration
  */
  // ここでvariablesを渡しても、postcss-custom-propertiesが発動しない
  // css: ['~/styles/variables.css', '~/styles/keyframes.css', '~/styles/reset.css'].map(src => ({
  css: ['~/styles/keyframes.css', '~/styles/reset.css'].map(src => ({
    src,
    lang: 'postcss',
  })),
  build: { postcss },
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap', '~~/modules/typescript.js'],
  extractCSS: true,
  axios: {},
};
