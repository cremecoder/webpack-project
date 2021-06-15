## Webpack

Webpack reads lists/arrays from right to left. So whatever is in the last position of an array in webpack.config is read FIRST.

## NPM scripts

In package.json...

- "start" runs "webpack serve" and runs the dev server.
- "build-dev" outputs dist folder in "development" mode, so we can see outputted files in an unminified format .
- "build" runs "NODE_ENV=production webpack" which changes process.env.NODE_ENV to "production" which changes mode variable in webpack.confi.js. Run this as the final build for distribution.
- "clean" runs "rm -rf dist" which cleans the dist folder.

## Config files and browserslistrc

Both babel.config.js and postcss.config.js read .browserslistrc
(if there is one) to know what the target browsers are for vendor-prefixes
and more.

## Babel config file

In babel.config.js, adding { runtime: "automatic" } to ["@babel/preset-react", ], allows JSX to be written without importing React. State, hooks and methods still need to be imported.

## Resolve extensions

In webpack.config.js, resolve with the property extensions allows us to import modules without having to explicitly declare the metioned extensions.

## Asset modules

No longer need loaders for images in Webpack 5: replaced with Asset Modules. output.assetModuleFilename declares a directory in the dist folder.

- "asset" automatically chooses between exporting a data URI and emitting a separate file. Previously achievable by using url-loader with asset size limit.

- "asset/resource" emits a separate file and exports the URL. Previously achievable by using file-loader.

- "asset/inline" exports a data URI of the asset. Previously achievable by using url-loader.

- "asset/source" exports the source code of the asset. Previously achievable by using raw-loader.

## Plugins

- Load CleanWebpackPluguin first. Cleans (deletes) contents of the output directory upon rebuild. Must also specify a path module.exports.output. output.path.resolve() is not needed in Webpack 5, but is still needed for this plugin.
- MiniCssExtractPlugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
- HtmlWebpackPlugin generates an HTML5 file for you that includes all your webpack bundles in the body using script tags.

### Known bugs

- In module.rules, load "postcss-loader" after "css-loader" but before
  "sass-loader" ie not in the last position of the array. Otherwise double
  slash comments in .scss files won't compile and also vendor-prefixes appear
  in source maps, which they shouldn't.

- In either webpack-dev-server or webpack 5, the presence of a .browserslistrc
  causes module.exports.target to not work properly, causing .browserslistrc not being sent to the production builds properly, causing live reloading (webpack serve)to stop working.

To fix, specify that in "development" mode, module.exports.target is targeting "web" and in production module.exports.target is targeting "browserslist".

- DID NOT GET THIS BUG.
  Not including these changes, app is supposed to crash. I did not experience this bug, but here is the code snippet if I ever do.
  use: [
  {
  loader: MiniCssExtractPlugin.loader,
  options: { publicPath: "" }
  }
  ]
