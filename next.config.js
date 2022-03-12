const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withSass = require('@zeit/next-sass')
const lessToJS = require('less-vars-to-js')

const fs = require('fs')
const path = require('path')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './styles/antd/theme.less'), 'utf8')
)

module.exports = withCss(withSass(withLess({
  enableSvg: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.push(
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        },
      )
      
      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
      
    }
    return config
  },
  env: {
    NEXT_API_URL_DEV: '',
    NEXT_API_URL: '',
  }
})))