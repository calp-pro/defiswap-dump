# <picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-dark.svg"><img alt="calp.pro icon" src="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-light.svg" height="32" align="absmiddle"></picture>&nbsp;&nbsp;defiswap-dump

<br>

Static set of addresses (Crypto.com DeFi Swap Ethereum mainnet).<br>
New pairs updates happen every hour at GitHub Action [update.yml](https://github.com/calp-pro/uniswap-v2-dump/actions/workflows/update.yml)<br>
via [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader)

Data: `dump.csv` 13Kb+ 

CSV schema: `id,pair,token0,token1`

## Example:
```
...
6,0x6491f4cf9c084ef8fc055eaaf735bdceccf69370,0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,0xdac17f958d2ee523a2206206994597c13d831ec7
...
```
where:
- `6`
  * pair/pool index at factory contract
- `0x6491f4cf9c084ef8fc055eaaf735bdceccf69370`
  * USDT/USDC AMM [contract](https://etherscan.io/address/0x6491f4cf9c084ef8fc055eaaf735bdceccf69370) address
- `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`
  * USDT ERC-20 token [contract](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) address
- `0xdac17f958d2ee523a2206206994597c13d831ec7`
  * USDC ERC-20 token [contract](https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7) address

## API
Same implementation as other Uniswap v2 based protocols.<br>
Base API reference: [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader?tab=readme-ov-file#api-reference).<br>
Predefined `filename` with value `dump.csv`.

## Usage CLI/API:
```bash
> node -e "require('defiswap-dump').load().then(pairs => console.log(pairs.length))"
> 100
```
