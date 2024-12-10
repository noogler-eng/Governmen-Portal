# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

1. compile contract - ``` npx hardhat compile ```
2. deploy command - ``` npx hardhat run scripts/deploy.ts --network amoy_polygon ```
3. contract address - 0xe8b1bDF3b383c3EDd708bcE7A5720dc020eC7211
4. contract verify - ``` sudo npx hardhat verify 0xe8b1bDF3b383c3EDd708bcE7A5720dc020eC7211 --network amoy_polygon ```
5. verification url - https://amoy.polygonscan.com/address/0xe8b1bDF3b383c3EDd708bcE7A5720dc020eC7211#code