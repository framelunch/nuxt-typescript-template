const tsLoader = {
  loader: 'ts-loader',
  options: { appendTsSuffixTo: [/\.vue$/] },
};

module.exports = function() {
  // Add .ts extension for store, middleware and more
  this.nuxt.options.extensions.push('ts');
  // Extend build
  this.extendBuild(config => {
    // Add TypeScript loader
    config.module.rules.push({ test: /((client|server)\.js)|(\.tsx?)$/, ...tsLoader });
    // Add TypeScript loader for vue files
    config.module.rules
      .filter(rule => rule.loader === 'vue-loader')
      .forEach(rule => (rule.options.loaders.ts = tsLoader));
    // Add .ts extension in webpack resolve
    if (config.resolve.extensions.indexOf('.ts') === -1) {
      config.resolve.extensions.push('.ts');
    }
  });
};
