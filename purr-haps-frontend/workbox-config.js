module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{html,js,css,svg,png,jpg,jpeg,webp}"],
  swDest: "build/service-worker.js",
  maximumFileSizeToCacheInBytes: 15 * 1024 * 1024 // 15 MB
};
