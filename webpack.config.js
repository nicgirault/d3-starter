module.exports = {
    entry: ['webpack/hot/dev-server', "./src/main.js"],
    output: {
        path: __dirname + '/dist',
        filename: "spot-my-gene.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
