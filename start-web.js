
process.env.NODE_ENV = 'development'

require('process-bootstrap')('react-app', 'REACT-APP')

const Path = require('path')
const debug = require('debug')
const Server = require('pundle-dev')
const debugInfo = debug('Info')
const debugError = debug('Error')

const port = process.env.PORT || 8056

const server = new Server({
  pundle: {
    entry: ['index.js'],
    rootDirectory: Path.join(process.cwd(), 'src'),
    pathType: 'filePath',
    replaceVariables: {'process.env.NODE_ENV': 'development'},
    moduleDirectories: ['node_modules'],
  },
  server: {
    port,
    error: debugError,
    ready() {
      debugInfo('Ready')
    },
    generated() {
      debugInfo('Regenerated')
    },
    hmr: true,
    sourceMap: true,
    sourceRoot: Path.join(process.cwd(), 'src'),
  },
  watcher: {},
  generator: {
    sourceMap: true,
    wrapper: 'hmr',
  },
})

server.pundle.loadPlugins([
  [require.resolve('babel-pundle'), {
    config: {
      'presets': [
        require.resolve('babel-preset-es2015'),
        require.resolve('babel-preset-stage-0'),
        require.resolve('babel-preset-react'),
      ],
      'plugins': [
        require.resolve('babel-plugin-syntax-object-rest-spread'),
        require.resolve('babel-plugin-transform-object-rest-spread'),
        require.resolve('babel-plugin-transform-es2015-destructuring'),
        [require.resolve('babel-plugin-react-transform'), {
          'transforms': [{
            'transform': require.resolve('react-transform-catch-errors'),
            'imports': [require.resolve('react'), require.resolve('redbox-react')],
          }],
        }],
      ],
    },
  }],
]).then(function() {
  return server.activate()
}).catch(debugError)
