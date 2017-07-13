/* eslint-disable no-console */
process.env.NODE_ENV = 'production'

const Path = require('path')
const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const Pundle = require('pundle')
const rimrafSync = require('rimraf').sync

const buildPath = 'build'

// Remove all content but keep the directory so that
// if you're in it, you don't end up in Trash
rimrafSync(buildPath + '/*')

const pundle = new Pundle({
  entry: ['index.js'],
  rootDirectory: Path.join(process.cwd(), 'src'),
  pathType: 'filePath',
  replaceVariables: {'process.env.NODE_ENV': 'production'},
  moduleDirectories: ['node_modules'],
})

pundle.loadPlugins([
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
      ],
    },
  }],
]).then(function() {
  return pundle.compile()
}).then(function() {
  return new Promise(function(resolve, reject) {
    mkdirp('build', function(error) {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}).then(function() {
  return new Promise(function(resolve, reject) {
    fs.writeFile(path.join(buildPath, 'bundle.js'), pundle.generate().contents, function(error) {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}).then(function() {
  const openCommand = process.platform === 'win32' ? 'start' : 'open'
  console.log('Successfully generated a bundle in the build folder!')
  console.log('You can now serve it with any static server.')
  console.log('For example:')
  console.log()
  console.log('  npm install -g pushstate-server')
  console.log('  pushstate-server build')
  console.log('  ' + openCommand + ' http://localhost:9000')
  console.log()
  console.log('The bundle is optimized and ready to be deployed to production.')
}, function(err) {
  console.error('Failed to create a production build. Reason:')
  console.error(err.message || err)
  process.exitCode = 1
})
