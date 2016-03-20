process.env.NODE_ENV = 'test';

var path = require('path');
var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    browser: ['PhantomJS', 'Chrome'],
    singleRun: false,
    frameworks: ['tap'],
    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      './src/**/*.test.jsx'
    ],
    preprocessors: {
      './src/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    // logLevel: config.LOG_DEBUG,
    plugins: [
      require('karma-webpack'),
      require('karma-tap'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-coverage'),
      require('karma-sourcemap-loader'),
      require('karma-spec-reporter')
    ],
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressSkipped: false,
      suppressPassed: false,
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      reporters: [
        {type: 'html', subdir: 'html'},
        {type: 'lcovonly', subdir: '.'}
      ]
    },
    webpack: {
      devtool: 'inline-source-map',
      node: {
        fs: 'empty'
      },
      resolve: {
        extensions: ['', '.js', '.jsx'],
        root: path.resolve(__dirname, 'src')
      },
      externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      module: {
        preLoaders: [
          {
            test: [/\.js$/, /\.jsx$/],
            exclude: /node_modules/,
            loaders: ["eslint-loader"]
          }
        ],
        loaders: [
          {
            test: [/\.js$/, /\.jsx$/],
            loaders: ['babel'],
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: [
              'style-loader',
              'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
              'postcss-loader'
            ]
          },
          {
            test: [/\.js$/, /\.jsx$/, /\.css$/],
            exclude: /node_modules/,
            include: './src',
            loader: 'isparta'
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    },
    port: 9876,
    colors: true
  });
}
