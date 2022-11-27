const webpack = require('webpack');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    API_ENDPOINT: `http://${process.env.API_CONTAINER_NAME}:${process.env.API_PORT}`
  }
}
