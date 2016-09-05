var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/main.js",
    output: {
        path: "./build",
        filename: "main.js"
    },
    module: {
        loaders: [
            {
                test: /.css$/,
                loaders: ["style","css"],
                exclude: "/node_modules"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css', '.jsx']
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "welcome"
        })
    ]
};