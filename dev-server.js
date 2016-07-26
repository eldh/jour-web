/* eslint-disable no-console */
const Server = require('pundle-dev')

const port = 8056

const babelConfig = {
  config: {
    'presets': ['es2015', 'stage-0', 'react'],
    'plugins': [
      'syntax-object-rest-spread',
      'transform-object-rest-spread',
      'transform-es2015-destructuring',
      // ['react-transform', {
      //   'transforms': [{
      //     'transform': 'react-transform-hmr',
      //     'imports': ['react'],
      //     'locals': ['module'],
      //   }, {
      //     'transform': 'react-transform-catch-errors',
      //     'imports': ['react', 'redbox-react'],
      //   }],
      // }],
    ],
  },
}

const pundle = {
  entry: ['index.js'],
  rootDirectory: process.cwd(),
  pathType: 'filePath',
  moduleDirectories: ['node_modules'],
}

const server = new Server({
  pundle,
  server: {
    port,
    sourceMapPath: '/_/bundle.js.map',
    error(error) { console.error(error) },
    ready() { console.info(`goto http://localhost:${port}/`) },
    hmr: true,
    watch: true,
    sourceMap: true,
    sourceRoot: process.cwd(),
    hmrPath: '/_/bundle_hmr',
    bundlePath: '/_/bundle.js',
  },
  watcher: {
    usePolling: false,
    ready: () => console.log('watcher:ready'),
    error: () => console.log('watcher:error'),
    generate: () => console.log('watcher:generate'),
  },
  generator: {
    sourceMap: true,
    wrapper: 'hmr',
    projectName: 'Jour',
  },
})

server.pundle.loadPlugins([
  [require.resolve('babel-pundle'), babelConfig],
]).catch((e) => console.log('Plugin load error', e))

server.activate().catch((e) => console.log('activation failed', e))
