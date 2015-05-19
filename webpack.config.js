/*eslint-env node */
"use strict";

var webpack =   require('webpack'),
    path =      require('path');

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var envPlugin = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV : JSON.stringify(process.env.NODE_ENV || "development")
  }
});

var entryPoints = {
    "main" : "./src/main.js"
};

for (var key in entryPoints) {
    entryPoints[key] = ['webpack/hot/dev-server', entryPoints[key]];
}

var babelConfig = "babel?stage=1&optional=runtime";

module.exports = {
    entry: entryPoints,
    output: {
        filename: "[name].js",
        path: process.cwd() + "/dist",
        publicPath: "/"
    },
    devServer: {
        contentBase: "./dist",
        hot: true,
        port: 4000,
        info: false
    },
    module: {
        loaders: [
            {test: /\.css$/, loaders: ["style","css","autoprefixer"]},
            {test: /\.js$/, exclude: /node_modules/, loader: babelConfig},
            {test: /\.jsx$/, loaders: ["react-hot", babelConfig] },
            {test: /\.json$/, loader: "json-loader"},
            {test: /\.html$/, loader: "raw"}
        ]
    },
    plugins: [
        envPlugin,
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: ['', '.js','.json','.jsx'],
        modulesDirectories: ['node_modules','src']
    }
};
