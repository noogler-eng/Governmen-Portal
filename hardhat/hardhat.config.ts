import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const JSON_RPC_ENDPOINT = process.env.JSON_RPC_ENDPOINT || "";
const API_KEY = process.env.API_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    amoy_polygon: {
      url: JSON_RPC_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    apiKey: API_KEY,
  },
  sourcify: {
    enabled: true,
  },
};

export default config;
