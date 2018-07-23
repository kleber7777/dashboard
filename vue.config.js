module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      baseUrl: '/dashboard'
    }
  }
}
