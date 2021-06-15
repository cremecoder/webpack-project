## Notes on webpack.config

#1 - Webpack reads lists/arrays from right to left. So whatever is in the last position of an array in webpack.config is read FIRST.

#2 - In package.json...

- "start" runs "webpack serve" and runs the dev server.
- "build-dev" outputs dist folder in "development" mode, so we can see outputted files in an unminified format .
- "build" runs "NODE_ENV=production webpack" which changes process.env.NODE_ENV to "production" which changes mode variable in webpack.confi.js. Run this as the final build for distribution.

#3 - Both babel.config.js and postcss.config.js read .browserslistrc
(if there is one) to know what the target browsers are for vendor-prefixes
and more.

#4 - In babel.config.js, adding { runtime: "automatic" } to ["@babel/preset-react", ], allows JSX to be written without importing React. State, hooks and methods still need to be imported.

#5 - In webpack.config.js, resolve with the property extensions allows us to import modules without having to explicitly declare the metioned extensions.

# Known bugs

#1 - In module.rules, load "postcss-loader" after "css-loader" but before
"sass-loader" ie not in the last position of the array. Otherwise double
slash comments in .scss files won't compile and also vendor-prefixes appear
in source maps, which they shouldn't.

#2 - In either webpack-dev-server or webpack 5, the presence of a .browserslistrc
causes module.exports.target to not work properly, causing .browserslistrc not being sent to the production builds properly, causing live reloading (webpack serve)to stop working.

To fix, specify that in "development" mode, module.exports.target is targeting "web" and in production module.exports.target is targeting "browserslist".
