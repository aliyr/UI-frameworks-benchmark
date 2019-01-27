module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000'
      },
      '^/todos': {
        target: 'https://jsonplaceholder.typicode.com/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
