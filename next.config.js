// next.config.js
const withVideos = require('next-videos')



module.exports = withVideos({
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
})