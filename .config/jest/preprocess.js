const babelOptions = require('../babel/babel.config');

module.exports = require('babel-jest').createTransformer(babelOptions);
