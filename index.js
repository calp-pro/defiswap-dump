const loader = require('uniswap-v2-loader')
const dump_csv = require('path').join(__dirname, 'dump.csv')

module.exports.load = (params = {}) => loader.load({
    factory: '0x9deb29c9a4c7a88a3c0257393b7f3335338d9a9d',
    filename: dump_csv,
    ...params
})

module.exports.subscribe = (callback, params = {}) => loader.subscribe(
    callback,
    {
        factory: '0x9deb29c9a4c7a88a3c0257393b7f3335338d9a9d',
        filename: dump_csv,
        ...params
    }
)