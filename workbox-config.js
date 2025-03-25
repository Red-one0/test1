module.exports = {
  globDirectory: 'out/',
  globPatterns: ['**/*.{html,js,css,json,png,jpg,svg}'],
  swDest: 'out/sw.js',
  runtimeCaching: [
    {
      urlPattern: /.*/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-resources',
      },
    },
  ],
};
