const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  configureWebpack:{
    resolve: {
      alias:{
        '@config':path.resolve(__dirname, '../')
      }
    }
  },
  transpileDependencies: true
})
