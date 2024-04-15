const pug = require('pug')
const fs = require('fs-extra')
const glob = require('glob')
const rimraf = require('rimraf')

const { getCaps } = require('./caps')

rimraf.sync('chloe')
fs.mkdirSync('chloe')
fs.writeFileSync('chloe/index.html', pug.renderFile('views/index.pug', getCaps()))
fs.copySync('images', 'chloe/images')
fs.copySync('node_modules/reset-css/reset.css', 'chloe/reset.css')
fs.copySync('node_modules/lazyloadjs/build/lazyload.min.js', 'chloe/lazyload.js')

const statics = glob.sync('public/*')
statics.forEach((file) => fs.copySync(file, 'chloe/' + file.replace('public/', '')))
