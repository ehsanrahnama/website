// next.config.js
const withVideos = require("next-videos");



module.exports = withVideos({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path: '',
  },
})
