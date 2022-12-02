const path = require('path');

module.exports = {
    entry: {
        //точка входа
        main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        ["@babel/plugin-proposal-class-properties", {"loose": true}]
                    ]
                }
            }
        ]
    },
    // plugins: [

    // ],
    devServer: {
        port: 3000,
        hot: true,
        open: false
    }
}