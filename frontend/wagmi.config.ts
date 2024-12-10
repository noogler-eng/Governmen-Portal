import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { polygonAmoy } from "viem/chains";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [polygonAmoy],
  ssr: true,
});

export default config