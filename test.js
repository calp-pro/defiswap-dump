const { describe, before, it } = require('node:test')
const assert = require('node:assert/strict')
const {load} = require('./index')

describe('defiswap-dump', () => {

    it('Find pair addresses CRV/USDC', () =>
        load().then(pairs => {
            assert.ok(
                pairs.some(_ =>
                    _.pair == '0x6ec87787e3ca30ec7e56d781e62444950c5e3c59' &&
                    _.token0 == '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' &&
                    _.token1 == '0xd533a949740bb3306d119cc777fa900ba034cd52'
                )
            )
        })
    )

})
