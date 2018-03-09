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
const postcss = [
  postcssImport(),
  postcssCustomProperties({ preserve: false }),
  postcssCustomMedia(),
  postcssNested(),
  postcssColorHexAlpha(),
  postcssFixes(),
  postcssUrl(),
  autoprefixer(),
];
// 動的ルーティングのページをある程度静的に吐き出したい箇所はここにセット
const routes = ['/members/1', '/members/2', '/members/3'];

/*
 * meta
 */
const title = 'Nuxt.js template - TypeScript, PostCSS';
const description = 'Nuxt.js project';
const metaImage = 'https://dummyimage.com/300x200/3b8070/fff.png&text=Nuxt.js+template';
const baseUrl = process.env.BASE_URL || `http://${host}:${port}`;
const og = [
  // { property: 'og:type', content: '' },
  // { property: 'og:image', content: '' },
  // { property: 'og:url', content: '' },
  // { property: 'og:site_name', content: '' },
];
const twitter = [
  // { property: 'twitter:card', content: '' },
  // { property: 'twitter:site', content: '' },
];

module.exports = {
  srcDir: 'src/',
  env: { baseUrl },
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'itempropName', itemprop: 'name', content: title },
      { hid: 'itempropDesc', itemprop: 'description', content: description },
      { hid: 'itempropImage', itemprop: 'image', content: metaImage },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      ...og,
      ...twitter,
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
  css: ['~/styles/keyframes.css', '~/styles/reset.css'].map(src => ({ src, lang: 'postcss' })),
  build: { postcss },
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap', '~~/modules/typescript.js'],
  extractCSS: true, // 別途CSSを出力するのではなく、htmlのstyleタグに埋め込まれる
  axios: {},
};
