const { defineConfig } = require('@vue/cli-service');
const path = require('path'); // 引入 path 模块

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    open: true,
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/i,
          exclude: /node_modules/,
          include: path.resolve('src'), // 使用 path.resolve() 解析路径
          use: [
            {
              loader: 'url-loader',
              options: {
                esModule: false, // 不转换esm规范
                name: 'img/[name].[hash:2].[ext]',
                limit: 1024 * 12
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: { progressive: true, quality: 50 }, // 压缩JPEG图像
                optipng: { enabled: true }, // 压缩PNG图像
                pngquant: { quality: [0.5, 0.65], speed: 4 }, // 压缩PNG图像
                // gifsicle: { interlaced: false }, // 压缩GIF图像
                webp: { quality: 75 } // 压缩webp
              }
            }
          ]
        }
      ]
    }
  }
});