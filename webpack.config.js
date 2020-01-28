const webpack = require('webpack')

module.exports = {
    entry: './app/App.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    build: {
        plugins: [
            new webpack.ProvidePlugin({
                React: 'react',
                ReactDOM: 'react-dom',
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    }
}