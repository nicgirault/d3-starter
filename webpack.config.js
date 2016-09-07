module.exports = {
    entry: ["./src/main.js"],
    output: {
        path: __dirname + '/dist',
        filename: "circos.js",
        libraryTarget: "var",
        library: "Circos"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
