const { resolve } = require('path');
const devConfig = require('./dev');

module.exports = {
    ...devConfig,
    devServer: {
        port: 3000,
        host: 'localhost',
        inline: true,
        contentBase: resolve(__dirname, '../src'),
    },
};
