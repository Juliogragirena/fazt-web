/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

const { override, addWebpackAlias } = require('customize-cra');
const { resolve } = require('path');

module.exports = override(
  addWebpackAlias({
    ['@assets']: resolve(__dirname, './src/assets'),
    ['@atoms']: resolve(__dirname, './src/atoms'),
    ['@molecules']: resolve(__dirname, './src/molecules'),
    ['@organism']: resolve(__dirname, './src/organism'),
    ['@templates']: resolve(__dirname, './src/templates')
  })
);
