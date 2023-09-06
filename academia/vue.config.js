const { defineConfig } = require('@vue/cli-service')
process.env.local = '3030'


module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/':{
        target: 'http://localhost:3030/',
        secure: false,
        ws: false,
        changeOrigin: false
      }
    }
  }
})
