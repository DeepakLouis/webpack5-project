module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", {runtime : "automatic"}] //No need to import react in each file from react 17 onwards
    ]
}