const path = require('path');

module.exports = function(env, argv) {
    return {
        entry: {
            darkmode: './scss/darkmode.scss'
        },
        mode: env && env.production ? 'production' : 'development',
        devtool: env && env.production ? false : 'source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
        },
        module: {
            rules: [{
                test: /\.scss$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].css'
                    }
                }, {
                    loader: 'extract-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: env && env.production
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: env && env.production,
                        implementation: require('sass')
                    }
                }]
            }]
        },
        performance: {
            hints: false
        }
    };
};
