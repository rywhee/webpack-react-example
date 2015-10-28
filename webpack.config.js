module.exports = {
    context: __dirname + "/app",
    entry: {
        javascript: "./app.js",
        html: "./index.html"
    },

    output: {
        filename: "app.js",
        path: __dirname + "/dist",
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel?stage=0"]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!autoprefixer!sass?outputStyle=expanded'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css!autoprefixer'
            },
        ]
    }
};
