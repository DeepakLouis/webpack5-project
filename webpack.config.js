const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = "web"; // for HMR in dev ... because of browserslist it won't work in dev

if (process.env.NODE_ENV == "production") {
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode: mode,
    target: target,

    devtool: "source-map",

    output: {
        assetModuleFilename: "images/[name].[hash][ext][query]",
    },
    
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset", //https://webpack.js.org/guides/asset-modules/
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ""}
                    }
                    ,
                    "css-loader",
                    "postcss-loader", // keep it before sass so that sass file doesn't contain any vendor prefixes
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: [".js", ".jsx"] // will automatically infer the type of import file
    },

    devServer: {
        contentBase: "./dist", //to specify which folder to access. or else all folders will be displayed
        hot: true // Enables HMR. Applies the changes without refreshing the dom
    }
};